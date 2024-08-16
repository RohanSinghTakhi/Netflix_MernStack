import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice"
import movieReducer from "./movieSlice";
const store = configureStore({
    reducer:{
        app:useReducer,
        movie:movieReducer
    }
})
export default store;
