import React from 'react'
import { CardsSelect } from '../cards-select'
import { CardMutation } from '../card-mutation'
import { CardHelper } from '../card-helper'
import { CardsList } from '../cards-list'
import './main-cards.scss'

export type IImgCard = {
  link: string
  name: string
  id: string
}

export const MainCards = () => {
  return (
    <>
      <section className="main-cards">
        <div className="main-cards__option">
          <CardsSelect />

          <div className="main-cards__add">
            <p className="mp">Add new card:</p>
            <CardMutation />
          </div>

          <div className="main-cards__get-link">
            <CardHelper />
          </div>
        </div>
        <h2 className="main-cards__main-text">Cards:</h2>
        <div className="main-cards__grid">
          <CardsList />
        </div>
      </section>
    </>
  )
}