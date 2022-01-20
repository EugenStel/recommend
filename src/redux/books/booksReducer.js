import { bookActionTypes } from "./bookActionTypes";

const initialState = {
    books: []
};


export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case bookActionTypes.FETCH_BOOKS_FROM_API:
            return {
                books: action.payload
            };
        case bookActionTypes.FETCH_BOOKS_FROM_API_FAIL:
            return {
                books: []
            };
        default:
            return state;
    }
}