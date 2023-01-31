import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { store } from "../../../../store/store";

export type ICount = "" | "1" | "2" | "3" | "4" | "5";

export type Props = {
  count: ICount;
};

const initialState: Props = {
  count: "",
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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
