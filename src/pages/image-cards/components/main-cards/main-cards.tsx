import React, { useEffect, useRef, useState } from 'react'
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
  const heightRef = useRef<HTMLDivElement | null>(null)
  const [heightImgs, setHeightImgs] = useState(0)

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setHeightImgs(entries[0].contentRect.height)
    })

    if (heightRef.current) {
      observer.observe(heightRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

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
        <h2 className="main-cards__main-text">Cards: {heightImgs}px</h2>
        <div className="main-cards__grid">
          <CardsList ref={heightRef} />
        </div>
      </section>
    </>
  )
}
