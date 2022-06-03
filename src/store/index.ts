import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";

const reducer = combineReducers({
    mainReducer,
});

export const store = configureStore({
    reducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
