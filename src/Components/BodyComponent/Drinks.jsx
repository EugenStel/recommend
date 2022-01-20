import { useState, useEffect } from "react";
import { CustomPagination } from "./movies/Pagination";
import { useSelector, useDispatch } from 'react-redux';
import { getDrinks } from '../../redux/drinks/drinksSelectors'
import { getUser, getUserId, getIsAuth } from "../../redux/user/userSelectors";
import { fetchDrinks } from '../../redux/drinks/drinksActions'
import { getAllRecommends } from '../../redux/recommend/recommendSelectors'
import { DrinksCard } from "./DrinksCard";
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'


export const DrinksComponent = () => {
  const [page, setPage] = useState(1);


  const drinks = useSelector(getDrinks)
  const { user } = useSelector(getUser);
  const userId = useSelector(getUserId);

  const dispatch = useDispatch();

  const cartDrinks = useSelector(getAllRecommends)
  const userIsAuth = useSelector(getIsAuth)

  const isItemAdded = (id) => {
    if (userIsAuth) {
      return cartDrinks?.drinks?.some((obj) => Number(obj.id) === Number(id));
    }
  };


  const onAddToCart = async (obj) => {
    const userIdRef = doc(db, 'users', `${userId}`)
    const docSnap = await getDoc(userIdRef);
    const docUser = docSnap.data();
    let prev = docUser
    let prevdrinks = docUser?.drinks
    if (typeof prevdrinks == "undefined")
      setDoc(doc(db, "users", userId), { ...prev, drinks: [obj] });
    else
      setDoc(doc(db, "users", userId), { ...prev, drinks: [...prevdrinks, obj] });
  }

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchDrinks(page))
  }, [page])

  return (
    <>
      <h1 className="font-bold text-center text-4xl py-5 mb-5">Drinks </h1>
      <section className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {drinks.map((drink) => {
          const { name, description, image_url, tagline, first_brewed, id, abv, food_pairing } = drink
          return (
            <DrinksCard
              name={name}
              description={description}
              image_url={image_url}
              tagline={tagline}
              first_brewed={first_brewed}
              id={id}
              abv={abv}
              food_pairing={food_pairing}
              user={user}
              userId={userId}
              drink={drink}
              onPlus={(drink) => onAddToCart(drink)}
              isItemAdded={(id) => isItemAdded(id)}
            />
          )
        })}
      </section>
      <CustomPagination setPage={setPage} />
    </>
  )
}