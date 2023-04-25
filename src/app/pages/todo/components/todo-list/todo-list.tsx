import React, { FC, useEffect, useState } from 'react'
import { List } from '@mui/material'
import { getUniqueId } from '../../../../utils/utils'
import { IItem, ITypeButton } from '../../todo'
import { ItemMemo } from './components'
import './todo-list.scss'

interface Props {
  filterText: string
  newEl: string
  filterButton: ITypeButton
}

const arrText: IItem[] = [
  { id: getUniqueId(2), text: 'item 1', done: true },
  { id: getUniqueId(2), text: 'item 2', done: false },
  { id: getUniqueId(2), text: 'item 3', done: false }
]

export const TodoList: FC<Props> = ({
  filterText,
  newEl,
  filterButton
}) => {
  const [arr, setArr] = useState(arrText)
  const [numTask, setNumTask] = useState('')

  useEffect(() => {
    let iW = 0
    let iD = 0
    arr.forEach((el) => {
      el.done ? iW++ : iD++
    })
    setNumTask(`${iW} for work, ${iD} done`)
  }, [arr])

  useEffect(() => {
    if (newEl !== '') {
      setArr((prevState) => {
        return [
          ...prevState,
          {
            id: getUniqueId(2),
            text: newEl,
            done: false
          }
        ]
      })
    }
  }, [newEl])

  function remove(id: string) {
    setArr((prevState) => {
      const removeArr = prevState.filter((el) => el.id !== id)
      return removeArr
    })
  }

  function doLineThrough(id: string) {
    setArr((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            done: !el.done
          }
        } else {
          return el
        }
      })
    })
  }

  function statusFilterButton(
    filterButton: ITypeButton,
    done: boolean
  ) {
    if (
      (done === true && filterButton === 'Done') ||
      (done === false && filterButton === 'Active') ||
      filterButton === 'All'
    ) {
      return true
    }
    return false
  }

  return (
    <section className="todo-list">
      <p> {numTask} </p>
      <List>
        {arr.reduce((acc, item) => {
          statusFilterButton(filterButton, item.done) &&
            item.text.indexOf(filterText) >= 0 &&
            acc.push(
              <ItemMemo
                key={item.id}
                text={item.text}
                id={item.id}
                done={item.done}
                remove={remove}
                doLineThrough={doLineThrough}
              />
            )
          return acc
        }, [] as JSX.Element[])}
      </List>
    </section>
  )
}
