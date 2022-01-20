import { moviesActionTypes } from "./moviesActionTypes";

const initialState = {
    movies: []
};


export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case moviesActionTypes.FETCH_MOVIES_FROM_API:
            return {
                movies: action.payload
            };
        case moviesActionTypes.FETCH_MOVIES_FROM_API_FAIL:
            return {
                movies: []
            };
        default:
            return state;
    }
}