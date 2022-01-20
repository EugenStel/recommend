import { signInWithGoogle, auth } from '../../firebase/firebaseLogin'
import { userActionTypes } from '../user/userActionTypes'


export const userLoginWithGoogle = () => {
    return (dispatch) => {
        signInWithGoogle()
            .then((user) => {
                dispatch({
                    type: userActionTypes.USER_LOGIN,
                    payload: user
                });
            })
    }
}


export const userLogout = () => {
    return (dispatch) => {
        auth.signOut()
            .then(() => {
                dispatch({
                    type: userActionTypes.USER_LOGOUT
                })
            })
    }
}