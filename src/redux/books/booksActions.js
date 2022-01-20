import { bookActionTypes } from "./bookActionTypes";
import { booksApiKey } from "../../Components/api/api";
import axios from "axios";

export const fetchBooks = () => (dispatch) => {
    axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${booksApiKey}`)
        .then((res) => dispatch({
            type: bookActionTypes.FETCH_BOOKS_FROM_API,
            payload: res.data.results.books
        }))
        .catch((error) => dispatch({
            type: bookActionTypes.FETCH_BOOKS_FROM_API_FAIL,
            payload: error
        }))
}