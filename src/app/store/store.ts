import { bookSlice } from "./../container/books/books.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: bookSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
