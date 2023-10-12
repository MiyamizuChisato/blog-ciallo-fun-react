import {configureStore} from '@reduxjs/toolkit';
import application from "./application.ts";

const store = configureStore({
    reducer: {
        application,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

