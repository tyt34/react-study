import { BookState } from "./../container/books/books.slice";
import { AppDispatch, RootState } from "./store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAbcText = () =>
  useAppSelector((store: BookState) => store.book.abc);

export const useBooks = () =>
  useAppSelector((store: BookState) => store.book.books);

export const useOrder = () =>
  useAppSelector((store: BookState) => store.book.order);
