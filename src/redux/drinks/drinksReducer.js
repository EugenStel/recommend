import { drinksActionTypes } from "./drincsActionTypes";

const initialState = {
    drinks: []
};


export const drinksReducer = (state = initialState, action) => {
    switch (action.type) {
        case drinksActionTypes.FETCH_DRINKS_FROM_API:
            return {
                drinks: action.payload
            };
        case drinksActionTypes.FETCH_DRINKS_FROM_API_FAIL:
            return {
                drinks: []
            };
        default:
            return state;
    }
}