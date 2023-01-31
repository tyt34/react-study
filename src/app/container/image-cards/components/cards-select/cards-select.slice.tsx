import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { store } from "../../../../store/store";

export type ICount = string;

export type Props = {
  count: ICount;
};

const initialState: Props = {
  //count: "",
  count: "3",
};

export const cardsSelectSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    changeCount: (state, action: PayloadAction<ICount>) => {
      state.count = action.payload;
    },
  },
});

export const { changeCount } = cardsSelectSlice.actions;
export type cardsSelectState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
