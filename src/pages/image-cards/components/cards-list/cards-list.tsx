/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  LegacyRef,
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react'
import { IImgCard } from '../main-cards/main-cards'
import {
  useGetImageCardsQuery,
  useGetSomeImageCardsMutation
} from '../../../../api'
import { cardsSelectState } from '../cards-select/cards-select.slice'
import { useAppSelector } from '../../../../store/hooks'
import { CardImg } from '../card-img'
import './cards-list.scss'

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

export const CardsList = forwardRef((props, ref) => {
  const [page, setPage] = useState(1)
  const [isVis, setIsVis] = useState(false)
  const listRef = useRef<any>(null)
  const categorySelect = useAppSelector(
    (store: cardsSelectState) => store.count.category
  )
  const { data, isLoading } = useGetImageCardsQuery({
    filter: categorySelect
  })
  const [addNewCards] = useGetSomeImageCardsMutation()
  const [isEnd, setIsEnd] = useState(false)
  const [amount, setAmount] = useState(0)

  /**
   * Так как от backend'а не приходят данные,
   * касательно последнего элементка, которого можно получить
   * сбрасывается amount, чтобы отрабатывала функция ограничения
   */
  useEffect(() => {
    if (page !== 1) {
      setPage(1)
    }
    if (page === 1) {
      setAmount(0)
    }
  }, [categorySelect])

  useEffect(() => {
    if (isVis && !isLoading && !isEnd) {
      setPage((prevS) => {
        return prevS + 1
      })
      addNewCards({
        page: page + 1,
        filter: categorySelect
      })
    }
  }, [isVis])

  const callbackFunction = (entries: any) => {
    setIsVis(entries[0].isIntersecting)
  }

  /**
   * Так как от backend'а не приходят данные,
   * касательно последнего элементка, которого можно получить
   * происходит сравнение количества элементов и при их совпадение
   * отключается дальнейшая возможность их подргрузки
   */
  useEffect(() => {
    if (data) {
      setAmount((prev) => {
        if (prev === data.length) {
          setIsEnd(true)
        }
        return data.length
      })
    }
  }, [data])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)

    if (listRef.current) {
      observer.observe(listRef.current)
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current)
      }
    }
  }, [])

  return (
    <>
      <section
        className="cards-list"
        ref={ref as LegacyRef<HTMLElement>}
      >
        {!isLoading && data ? (
          data.map((card: IImgCard, index: number) => {
            return (
              <CardImg
                key={card.id}
                objCard={card}
              />
            )
          })
        ) : isLoading && data ? (
          <div> Cards is loading...</div>
        ) : (
          <div> Server is offline.</div>
        )}
      </section>
      <div
        id="line"
        ref={listRef}
      ></div>
    </>
  )
})
