import { imageCardsApi } from './../api/image-cards/image-cards'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { bookSlice } from '../pages/books/books.slice'
import { cardsSelectSlice } from '../pages/image-cards/components/cards-select/cards-select.slice'
import { cardMutationSlice } from '../pages/image-cards/components/card-mutation/card-mutation.slice'

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    [imageCardsApi.reducerPath]: imageCardsApi.reducer,
    count: cardsSelectSlice.reducer,
    formMutation: cardMutationSlice.reducer
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(imageCardsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
