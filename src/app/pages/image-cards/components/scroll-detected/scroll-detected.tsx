/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useGetImageCardsQuery } from '../../../../api'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  changeCount,
  cardsSelectState
} from '../cards-select/cards-select.slice'
import './scroll-detected.scss'

export const ScrollDetected = () => {
  /**
   * Вариант отслеживания скролла
   * без использования Intersection Observer API
   */

  // const [scroll, setScroll] = useState(0);
  // const [isEnd, setIsEnd] = useState(false);
  // const [amount, setAmount] = useState(0);
  // const countSelect = useAppSelector(
  //   (store: cardsSelectState) => store.count.count
  // );

  // const dispatch = useAppDispatch();
  // //const { data, isLoading } = useGetImageCardsQuery(countSelect);

  // const handleScroll = () => {
  //   setScroll(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // // useEffect(() => {
  // //   if (data) {
  // //     setAmount((prev) => {
  // //       if (prev === data.length) {
  // //         setIsEnd(true);
  // //       }
  // //       return data.length;
  // //     });
  // //   }
  // // }, [data]);

  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // };

  // const observer = new IntersectionObserver(() => {
  // }, options);

  // useEffect(() => {
  //   const a = document.documentElement.scrollHeight;
  //   const b = window.innerHeight;
  //   const c = window.scrollY;
  //   const need = a - b - c;

  //   // if (need === 0 && !isLoading && !isEnd) {
  //   //   //dispatch(changeCount((+countSelect + 3).toString()));
  //   // }
  // }, [scroll]);

  return <></>
}
