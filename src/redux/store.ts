import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import filmsReducer from "./features/filmsSlice";
import peopleReducer from "./features/peopleSlice";

export const store = configureStore({
  reducer: {
    filmsReducer,
    peopleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
