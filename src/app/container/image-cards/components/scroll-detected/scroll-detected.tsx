/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  changeCount,
  cardsSelectState,
} from "../cards-select/cards-select.slice";
import "./scroll-detected.scss";

const ScrollDetected = () => {
  const [scroll, setScroll] = React.useState(0);
  const countSelect = useAppSelector(
    (store: cardsSelectState) => store.count.count
  );
  const dispatch = useAppDispatch();

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const a = document.documentElement.scrollHeight;
    const b = window.innerHeight;
    const c = window.scrollY;
    const need = a - b - c;

    if (need === 0) {
      dispatch(changeCount((+countSelect + 3).toString()));
    }
  }, [scroll]);

  return <></>;
};

export default ScrollDetected;
