import {combineReducers} from "@reduxjs/toolkit";

//Reducers
import menuReducer from "../components/Menu/Menu.slice";

export const RootReducer = combineReducers({
    menu: menuReducer,
});