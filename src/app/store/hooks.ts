import { AppDispatch, RootState } from "./store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAbcText = () => useAppSelector((store: RootState) => store.abc);
export const useBooks = () => useAppSelector((store: RootState) => store.books);
export const useOrder = () => useAppSelector((store: RootState) => store.order);
