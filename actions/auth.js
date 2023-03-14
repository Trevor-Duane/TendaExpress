import Base_Url from "../constants/api";
import { apiPost, clearUserData, setUserData } from "../utils/utils"; 
import { CLEAR_REDUX_STATE, LOGIN } from "../constants/actionTypes";
import { LOGINN, SIGNIN } from "../constants/api";
import store from "../store/store";

const { dispatch } = store

export const saveUserData = (data) => {
    dispatch({
        type: LOGIN,
        payload: data
    })
}

export function login(data) {
    return new Promise((resolve, reject) => {
        return apiPost(LOGINN, data)
            .then((res) => {
                if (res.token) {
                    setUserData(res).then(() => {
                        resolve(res)
                        saveUserData(res)
                    })
                    return
                }
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })

    })
}

export function register(data) {
    return apiPost(SIGNIN, data)
}  

export function logout(){
    dispatch({type: CLEAR_REDUX_STATE})
    clearUserData()
}