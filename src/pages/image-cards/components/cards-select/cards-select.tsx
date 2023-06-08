import React, { useState } from 'react'
import { changeCategory, ICount } from './cards-select.slice'
import { useAppDispatch } from '../../../../store/hooks'
import './cards-select.scss'

// const arrOption = [
//   ["", "All"],
//   ["1", "1"],
//   ["2", "2"],
//   ["3", "3"],
//   ["4", "4"],
//   ["5", "5"],
//   ["6", "6"],
// ];

export const arrOption = [
  ['all', 'All'],
  ['dangerous', 'danger'],
  ['fast', 'fast'],
  ['furious', 'furious'],
  ['fast&furious', 'fa & fu']
]

export const CardsSelect = () => {
  const [count, setCount] = useState<ICount>('')
  const dispatch = useAppDispatch()

  return (
    <>
      <section className="cards-select">
        <section className="select-cards">
          <select
            className="main-cards__select"
            value={count}
            onChange={(e) => {
              dispatch(changeCategory(e.target.value))
              setCount(e.target.value as ICount)
            }}
          >
            {arrOption.map((opt) => {
              return (
                <option
                  key={opt[0]}
                  value={opt[0]}
                >
                  {opt[1]}
                </option>
              )
            })}
          </select>
        </section>
      </section>
    </>
  )
}
