import { recommendActionTypes } from "./recommendActionTypes";

const initialState = {
    recommends: []
};


export const recommendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case recommendActionTypes.FETCH_RECOMMENDS_FROM_FIREBASE:
            return {
                recommends: action.payload
            };
        case recommendActionTypes.FETCH_RECOMMENDS_FROM_FIREBASE_FAIL:
            return {
                recommends: []
            };
        default:
            return state;
    }
}