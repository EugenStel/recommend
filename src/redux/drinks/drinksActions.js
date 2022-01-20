import { drinksActionTypes } from './drincsActionTypes'
import axios from "axios";

export const fetchDrinks = (page) => (dispatch) => {
    axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
        .then((res) => dispatch({
            type: drinksActionTypes.FETCH_DRINKS_FROM_API,
            payload: res.data
        }))
        .catch((error) => dispatch({
            type: drinksActionTypes.FETCH_DRINKS_FROM_API_FAIL,
            payload: error
        }))
}