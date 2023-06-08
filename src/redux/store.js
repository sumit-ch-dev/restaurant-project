import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const myStore = configureStore({
    reducer: Reducer,
    middleware: [thunk, logger]
})

export default myStore;

