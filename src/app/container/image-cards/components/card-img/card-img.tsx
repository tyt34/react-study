import React, { FC } from "react";
import { IImgCard } from "../main-cards/main-cards";
import "./card-img.scss";

type Props = {
  objCard: IImgCard;
};

const CardImg: FC<Props> = ({ objCard }) => {
  return (
    <section
      className="card"
      onClick={() => {
        console.log(" Click on card: ", objCard);
      }}>
      <p className="card__name">Name card: {objCard.name}</p>
      <img className="card__img" src={objCard.link} alt="" />
    </section>
  );
};

export default CardImg;
