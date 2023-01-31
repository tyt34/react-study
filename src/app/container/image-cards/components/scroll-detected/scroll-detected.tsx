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

  const handleScroll = (e: any) => {
    setScroll(window.scrollY);
    //console.log(e.target.documentElement.)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    //let need = window.outerHeight - window.scrollY - window.innerHeight;

    const a = document.documentElement.scrollHeight;
    const b = window.innerHeight;
    const c = window.scrollY;
    const need = a - b - c;

    //console.log("");
    //console.log(" Go: ", window.scrollY);
    //console.log(" Need: ", window.screenY);
    //console.log(" -> ", window.pageYOffset);
    //console.log(" Size display: ", window.innerHeight);
    //console.log(" Max px: ", window.outerHeight);
    //console.log(" --> ", need);
    //console.log(" -> ", window);

    //console.log(" D: ", document.documentElement.clientHeight);
    //console.log(" D: ", document.documentElement.scrollHeight);
    //console.log(" Count: ", countSelect);

    if (need === 0) {
      //console.log(" need add count ");
      dispatch(changeCount((+countSelect + 3).toString()));
    }
  }, [scroll]);

  return <></>;
};

export default ScrollDetected;
