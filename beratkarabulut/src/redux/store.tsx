import { configureStore } from "@reduxjs/toolkit";
import githubRepoReducer from "./githubRepoSlice";
import contactReducer from './contactSlice';


export const store = configureStore({
    reducer: {
        githubRepo: githubRepoReducer,
        contact: contactReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;