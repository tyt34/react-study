/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const [isVis, setIsVis] = useState(false);
  const listRef = useRef<any>(null);
  const { data, isLoading } = useGetImageCardsQuery();
  const [addNewCards] = useGetSomeImageCardsMutation();
  const [isEnd, setIsEnd] = useState(false);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (isVis && !isLoading && !isEnd) {
      setPage((prevS) => {
        return prevS + 1;
      });
      addNewCards(page + 1);
    }
  }, [isVis]);

  const callbackFunction = (entries: any) => {
    setIsVis(entries[0].isIntersecting);
  };

  useEffect(() => {
    if (data) {
      setAmount((prev) => {
        if (prev === data.length) {
          setIsEnd(true);
        }
        return data.length;
      });
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (listRef.current) {
      observer.observe(listRef.current);
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
