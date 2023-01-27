import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { store } from "../../store/store";

export type IBook = {
  name: string;
  /**
   * cents
   */
  cost: number;
  author: string;
};

export type IOrder = IBook & { amount: number };
export type IChangeOrder = IBook & { forward: "plus" | "minus" | "delete" };

export type Props = {
  abc: {
    text: string;
  };
  books: IBook[];
  order: IOrder[];
};

const booksInitialState = [
  {
    name: "Book 1",
    cost: 123,
    author: "Vania Vasilef",
  },
  {
    name: "Book 2",
    cost: 456,
    author: "Egor Ostorojnev",
  },
  {
    name: "Book 3",
    cost: 1577,
    author: "Larisa Beskymisa",
  },
  {
    name: "Book 4",
    cost: 420,
    author: "Ignat Akroбat",
  },
];

const initialState: Props = {
  abc: {
    text: "hello",
  },
  books: booksInitialState,
  order: [],
};

export const bookSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAbcText: (state, action: PayloadAction<string>) => {
      state.abc.text = action.payload;
    },
    changeAmountOrder: (state, action: PayloadAction<IChangeOrder>) => {
      const { payload } = action;
      const { name, cost, author, forward } = payload;
      const inOrder = state.order.some(
        (orderBook) => orderBook.name === payload.name
      );
      if (inOrder === false && forward === "plus") {
        state.order = [...state.order, { name, cost, author, amount: 1 }];
      } else if (inOrder === true && forward === "plus") {
        state.order = state.order.map((b) => {
          if (b.name === name) {
            return { ...b, amount: b.amount + 1 };
          } else {
            return b;
          }
        });
      } else if (forward === "minus") {
        state.order = state.order.map((b) => {
          if (b.name === name) {
            return { ...b, amount: b.amount - 1 };
          } else {
            return b;
          }
        });
      } else if (forward === "delete") {
        state.order = state.order.filter((b) => {
          return b.name !== name;
        });
      }
    },
  },
});

export const { setAbcText, changeAmountOrder } = bookSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
