import { moviesActionTypes } from "./moviesActionTypes";
import { movieApiKey } from "../../Components/api/api";
import axios from "axios";

export const fetchMovies = (page) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${movieApiKey}&language=ru-RU&page=${page}`)
        .then((res) => dispatch({
            type: moviesActionTypes.FETCH_MOVIES_FROM_API,
            payload: res.data.results
        }))
        .catch((error) => dispatch({
            type: moviesActionTypes.FETCH_MOVIES_FROM_API_FAIL,
            payload: error
        }))
}