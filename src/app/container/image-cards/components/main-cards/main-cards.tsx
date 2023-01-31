import React from "react";
import { useGetImageCardsQuery } from "../../../../api/image-cards/image-cards";
import Card from "../card-img/card-img";
import "./main-cards.scss";

export type IImgCard = {
  createdAt: string;
  likes: any[];
  link: string;
  name: string;
  owner: {
    about: string;
    avatar: string;
    cohort: string;
    name: string;
    _id: string;
  };
  _id: string;
};

const MainCards = () => {
  const { data, isLoading } = useGetImageCardsQuery();

  console.log(" -> ", data);
  console.log(" --> ", isLoading);

  return (
    <>
      <section className="main-cards">
        <h2 className="main-cards__main-text">Cards:</h2>
        <div className="main-cards__grid">
          {!isLoading
            ? data.map((card: IImgCard) => {
                return <Card objCard={card} />;
              })
            : null}
        </div>
      </section>
    </>
  );
};

export default MainCards;
