import React, { useState, useEffect } from 'react'
import { Header } from '../../component'
import {
  ButtonsFilter,
  Create,
  PortalExample,
  Search,
  Stopwatch,
  StopwatchClear,
  TodoList
} from './components'
import './todo.scss'

export type IItem = {
  id: string
  text: string
  done: boolean
}

export type ITypeButton = 'All' | 'Active' | 'Done'

const TodoPage = () => {
  const [filterText, setFilterText] = useState('')
  const [filterButton, setFilterButton] = useState<ITypeButton>('All')
  const [newEl, setNewEl] = useState('')

  const handleChangeFilter = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterText(event.target.value)
  }

  const handleChangeButtonFilter = (button: ITypeButton) => {
    setFilterButton(button)
  }

  function add(name: string) {
    setNewEl(name)
  }

  return (
    <section className="main">
      <Header />
      <div className="main__top">
        <h1 className="main__text">Todo List</h1>
      </div>

      <div className="main__setting fc">
        <Search handleChangeFilter={handleChangeFilter} />
        <ButtonsFilter
          handleChangeButtonFilter={handleChangeButtonFilter}
        />
      </div>

      <TodoList
        filterText={filterText}
        newEl={newEl}
        filterButton={filterButton}
      />

      <Create add={add} />

      <PortalExample />

      <Stopwatch />

      <StopwatchClear />
    </section>
  )
}

export default TodoPage
