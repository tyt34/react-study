/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import CardImg from "../card-img/card-img";
import { IImgCard } from "../main-cards/main-cards";
import { useGetImageCardsQuery } from "../../../../api/image-cards/image-cards";
import "./cards-list.scss";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const CardsList = () => {
  const [countCards, setCountCards] = useState(3);
  const listRef = useRef<any>(null);
  const { data, isLoading } = useGetImageCardsQuery(countCards);

  useEffect(() => {
    const observer = new IntersectionObserver((entries: any) => {
      const ratio = entries[0].intersectionRatio;

      if (ratio === 1 && !isLoading) {
        setCountCards((prevCount) => {
          if (data) {
            if (prevCount === data.length) {
              return prevCount + 3;
            }
          }
          return prevCount;
        });
      }
    }, options);

    if (listRef.current) {
      observer.observe(listRef.current);
    }
  }, [data]);

  return (
    <>
      <section className="cards-list">
        {!isLoading && data ? (
          data.map((card: IImgCard) => <CardImg key={card.id} objCard={card} />)
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
