import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./reducer";

const myStore = configureStore({
    reducer: Reducer,
})

export default myStore;

