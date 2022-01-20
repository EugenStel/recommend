import { recommendActionTypes } from "./recommendActionTypes";
import { doc, setDoc, getDoc, set, collection } from 'firebase/firestore'
import { db } from "../../firebase/firebaseConfig";

export const fetchRecommendsMovies = (userId) => async (dispatch) => {
    const userIdRef = await doc(db, 'users', `${userId}`)
    const docSnap = await getDoc(userIdRef);
    const docUser = docSnap.data();
    dispatch({
        type: recommendActionTypes.FETCH_RECOMMENDS_FROM_FIREBASE,
        payload: docUser
        // payload: docUser?.films
    })
}