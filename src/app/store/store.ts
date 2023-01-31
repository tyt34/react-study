import { imageCardsApi } from "./../api/image-cards/image-cards";
import { bookSlice } from "./../container/books/books.slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  //reducer: bookSlice.reducer,
  reducer: {
    book: bookSlice.reducer,
    [imageCardsApi.reducerPath]: imageCardsApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(imageCardsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
