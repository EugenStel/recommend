import { useEffect, useState } from "react"
import { SingleMovieCard } from "./SingleMovieCard"
import { CustomPagination } from "./Pagination"
import './movies.css'
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies } from "../../../redux/movies/moviesSelectors";
import { fetchMovies } from '../../../redux/movies/moviesActions'
import { getUser, getUserId, getIsAuth } from "../../../redux/user/userSelectors"
import { getAllRecommends } from '../../../redux/recommend/recommendSelectors'
import { fetchRecommendsMovies } from '../../../redux/recommend/recommendActions'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebaseConfig'

export const MoviesComponent = () => {

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies)
  const cartMovies = useSelector(getAllRecommends)
  const userIsAuth = useSelector(getIsAuth)
  const { user } = useSelector(getUser);
  const userId = useSelector(getUserId);


  const isItemAdded = (id) => {
    if (userIsAuth) {
      return cartMovies?.films?.some((obj) => Number(obj.id) === Number(id));
    }
  };

  const onAddToCart = async (objFromClickToCart) => {
    const userIdRef = doc(db, 'users', `${userId}`)
    const docSnap = await getDoc(userIdRef);
    const docUser = docSnap.data();
    let prev = docUser
    let prevMovies = docUser?.films
    if (typeof prevMovies == "undefined")
      setDoc(doc(db, "users", userId), { ...prev, films: [objFromClickToCart] });
    else
      setDoc(doc(db, "users", userId), { ...prev, films: [...prevMovies, objFromClickToCart] });
  }

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchRecommendsMovies(userId))
    dispatch(fetchMovies(page))
  }, [page])

  useEffect(() => {
    dispatch(fetchRecommendsMovies(userId))
  }, [])

  return (
    <>
      <div className="movies_wrapper">
        {movies.map((movie) => (
          <SingleMovieCard
            titleOrigin={movie.original_title}
            overview={movie.overview}
            poster_path={movie.poster_path}
            key={movie.id}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
            MovieId={movie.id}
            media_type={movie.media_type}
            user={user}
            userId={userId}
            movie={movie}
            onPlus={(movie) => onAddToCart(movie)}
            isItemAdded={(MovieId) => isItemAdded(MovieId)}
          />
        ))}
      </div>
      <CustomPagination setPage={setPage} />
    </>
  )
}