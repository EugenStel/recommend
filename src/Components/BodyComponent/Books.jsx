import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../redux/books/booksSelectors'
import { fetchBooks } from '../../redux/books/booksActions'
import { BooksCard } from "./BookCard";
import { getUser, getUserId, getIsAuth } from "../../redux/user/userSelectors";
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { getAllRecommends } from '../../redux/recommend/recommendSelectors'


export const BooksComponent = () => {

  const books = useSelector(getBooks)
  const { user } = useSelector(getUser);
  const userId = useSelector(getUserId);
  const dispatch = useDispatch();

  const cartBooks = useSelector(getAllRecommends)
  const userIsAuth = useSelector(getIsAuth)

  const onAddToCart = async (obj) => {
    const userIdRef = doc(db, 'users', `${userId}`)
    const docSnap = await getDoc(userIdRef);
    const docUser = docSnap.data();
    let prev = docUser
    let prevBooks = docUser?.books
    if (typeof prevBooks == "undefined")
      setDoc(doc(db, "users", userId), { ...prev, books: [obj] });
    else
      setDoc(doc(db, "users", userId), { ...prev, books: [...prevBooks, obj] });
  }

  const isItemAdded = (primary_isbn13) => {
    if (userIsAuth) {
      return cartBooks?.books?.some((obj) => Number(obj.primary_isbn13) === Number(primary_isbn13));
    }
  };

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <>
      <h1 className="font-bold text-center text-4xl py-5 mb-5">Books </h1>
      <section className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {books.map((book) => {
          const { author, book_image, description, rank, title, primary_isbn13 } = book
          return (
            <BooksCard
              key={primary_isbn13}
              author={author}
              book_image={book_image}
              description={description}
              rank={rank}
              title={title}
              user={user}
              userId={userId}
              book={book}
              primary_isbn13={primary_isbn13}
              onPlus={(book) => onAddToCart(book)}
              isItemAdded={(primary_isbn13) => isItemAdded(primary_isbn13)}
            />
          )
        })}
      </section>
    </>
  )
}