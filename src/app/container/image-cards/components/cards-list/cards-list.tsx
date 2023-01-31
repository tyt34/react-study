import React from "react";
import CardImg from "../card-img/card-img";
import { IImgCard } from "../main-cards/main-cards";
import { useAppSelector } from "../../../../store/hooks";
import { cardMutationState } from "../card-mutation/card-mutation.slice";
import { useGetImageCardsQuery } from "../../../../api/image-cards/image-cards";
import "./cards-list.scss";

const CardsList = () => {
  const countSelect = useAppSelector(
    (store: cardMutationState) => store.count.count
  );
  const { data, isLoading } = useGetImageCardsQuery(countSelect);

  return (
    <>
      <section className="cards-list">
        {!isLoading ? (
          data.map((card: IImgCard) => <CardImg key={card.id} objCard={card} />)
        ) : (
          <div> Cards is loading...</div>
        )}
      </section>
    </>
  );
};

export default CardsList;
