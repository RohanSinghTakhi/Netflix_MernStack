import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice"
import movieReducer from "./movieSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
    reducer:{
        app:useReducer,
        movie:movieReducer,
        searchMovie:searchSlice
    }
})
export default store;
