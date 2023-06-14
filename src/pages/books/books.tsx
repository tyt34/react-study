import React from 'react'
import { Order, Restore } from './components'
import { Header } from '../../component'

import './books.scss'

export const Books = () => {
  return (
    <>
      <Header />
      <section className="books">
        <Restore />
        <Order />
      </section>
    </>
  )
}
