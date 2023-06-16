import React, { useEffect, useRef, useState } from 'react'
import { CardsSelect } from '../cards-select'
import { CardMutation } from '../card-mutation'
import { CardHelper } from '../card-helper'
import { CardsList } from '../cards-list'

import styles from './main-cards.module.scss'

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
      <section className={styles.main}>
        <div className={styles.cards__option}>
          <CardsSelect />

          <div className={styles.cards__add}>
            <p className={styles.mp}>Add new card:</p>
            <CardMutation />
          </div>

          <div>
            <CardHelper />
          </div>
        </div>
        <h2>Cards: {heightImgs}px</h2>
        <div>
          <CardsList ref={heightRef} />
        </div>
      </section>
    </>
  )
}
