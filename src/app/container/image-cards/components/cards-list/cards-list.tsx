/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from "react";
import CardImg from "../card-img/card-img";
import { IImgCard } from "../main-cards/main-cards";
import {
  useGetImageCardsQuery,
  useGetSomeImageCardsMutation,
} from "../../../../api/image-cards/image-cards";
import "./cards-list.scss";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const CardsList = () => {
  const [page, setPage] = useState(1);
  const listRef = useRef<any>(null);
  const { data, isLoading } = useGetImageCardsQuery();

  const callbackFunction = (entries: any) => {
    console.log(" entries: ", entries);
    const ratio = entries[0].intersectionRatio;
    //if (ratio === 1 && !isLoading) {
    if (ratio === 1) {
      //console.log("1 NEXT PAGE ", !isLoading);

      setPage((prevS) => {
        console.log(" page ", prevS, data?.length);
        //addNewCards(prevS + 1);
        return prevS + 1;
      });

      //console.log(" start ", page);
      addNewCards(page + 1);
    } else {
      //console.log("isLoading: ", !isLoading);
      //console.log("ratio: ", ratio);
    }
  };

  //const callbackCallback = useCallback(callbackFunction, [page]);

  const [addNewCards] = useGetSomeImageCardsMutation();

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    //const observer = new IntersectionObserver(callbackCallback, options);

    if (listRef.current) {
      observer.observe(listRef.current);
      console.log(" => ");
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="cards-list">
        {!isLoading && data ? (
          data.map((card: IImgCard, index: number) => {
            return <CardImg key={card.id} objCard={card} />;
          })
        ) : isLoading && data ? (
          <div> Cards is loading...</div>
        ) : (
          <div> Server is offline.</div>
        )}
      </section>
      <div id="line" ref={listRef}></div>
    </>
  );
};

export default CardsList;
