import React, { FC } from 'react'
import { useAppDispatch } from '../../../../store/hooks'
import { changeFormMutation } from '../card-mutation/card-mutation.slice'
import { IImgCard } from '../main-cards/main-cards'
import './card-img.scss'

type Props = {
  objCard: IImgCard
}

export const CardImg: FC<Props> = ({ objCard }) => {
  const dispatch = useAppDispatch()

  return (
    <section
      id={`card ${objCard.id}`}
      className="card"
      onClick={() => {
        dispatch(changeFormMutation(objCard))
      }}
    >
      <p className="card__name">Name card: {objCard.name}</p>
      <img
        className="card__img"
        src={objCard.link}
        alt=""
      />
    </section>
  )
}
