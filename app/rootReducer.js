import { combineReducers } from "@reduxjs/toolkit";
import { userApi } from "../src/services/userApi";

const rootReducer = combineReducers({
    [userApi.reducerPath]: userApi.reducer

    // add more reducers
})

export const apiMiddlewares = [userApi.middleware];


export default rootReducer;