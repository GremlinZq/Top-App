// Core
import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { topPageAPI } from "../api/services";
import {RootReducer} from "./rootReducer";

export const store = configureStore({
    reducer: {
        RootReducer,
        // RTK Query reducer
        [topPageAPI.reducerPath]: topPageAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(topPageAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;