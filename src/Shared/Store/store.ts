import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import taskOneSlice from "../../Features/Lab1/taskOneSlice";

export type AppRootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    taskOneSlice: taskOneSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

//Saving store to the window
// @ts-ignore
window.store = store;