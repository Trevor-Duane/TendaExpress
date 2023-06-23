import { combineReducers } from "redux";
import { CLEAR_REDUX_STATE } from "../constants/actionTypes";
import auth from "./auth";
import orderSlice from "./orderSlice";
import basketSlice from "./basketSlice";
import categorySlice from "./categorySlice";

const appReducer = combineReducers({
    auth,
    order: orderSlice,
    basket: basketSlice,
    category: categorySlice,
})

const rootReducer = (state, action) => {
    if(action.type == CLEAR_REDUX_STATE) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer

