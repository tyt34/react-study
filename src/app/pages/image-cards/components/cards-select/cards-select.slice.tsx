import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { store } from '../../../../store/store'
//import { arrOption } from "./cards-select";

export type ICount = string

export type Props = {
  count: ICount
  category: string
}

const initialState: Props = {
  //count: "",
  count: '3',
  category: 'all'
}

export const cardsSelectSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    changeCount: (state, action: PayloadAction<ICount>) => {
      state.count = action.payload
    },
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    }
  }
})

export const { changeCount, changeCategory } = cardsSelectSlice.actions
export type cardsSelectState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
