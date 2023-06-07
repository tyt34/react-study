import React, { useState } from 'react'
import { Header } from '../../component'
import { ITypeButton } from '../todo/todo'
import {
  ButtonsFilterContextMemo,
  CreateContext,
  SearchContext
} from './components'
import TodoListContext from './components/todo-list-context/todo-list-context'
import './todo-context.scss'

export const TodoContextPage = () => {
  // const [filterText, setFilterText] = useState("");
  const [filterButton, setFilterButton] = useState<ITypeButton>('All')
  const [newEl, setNewEl] = useState('')

  // const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilterText(event.target.value);
  // };

  const handleChangeButtonFilter = (button: ITypeButton) => {
    setFilterButton(button)
  }

  function add(name: string) {
    setNewEl(name)
  }

  console.log(' --> ')

  return (
    <>
      <Header />
      <section className="main">
        <div className="main__top">
          <h1 className="main__text">Todo List (context)</h1>
        </div>

        <div className="main__setting fc">
          <SearchContext />
          <ButtonsFilterContextMemo
            handleChangeButtonFilter={handleChangeButtonFilter}
          />
        </div>

        <TodoListContext
          newEl={newEl}
          filterButton={filterButton}
        />

        <CreateContext add={add} />
      </section>
    </>
  )
}
