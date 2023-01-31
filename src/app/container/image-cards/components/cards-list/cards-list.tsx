import React from "react";
import { useGetImageCardsQuery } from "../../../../api/image-cards/image-cards";
import { useAppSelector } from "../../../../store/hooks";
import CardImg from "../card-img/card-img";
import { RootState } from "../cards-select/cards-select.slice";
import { IImgCard } from "../main-cards/main-cards";
import "./cards-list.scss";

const CardsList = () => {
  const countSelect = useAppSelector((store: RootState) => store.count.count);
  const { data, isLoading } = useGetImageCardsQuery(countSelect);

  return (
    <>
      <section className="cards-list">
        {!isLoading
          ? data.map((card: IImgCard) => (
              <CardImg key={card.id} objCard={card} />
            ))
          : null}
      </section>
    </>
  );
};

export default CardsList;
