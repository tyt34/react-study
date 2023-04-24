import React from 'react'
import Header from '../../component/header/header'
import Order from './components/order/order'
import Restore from './components/restore/restore'
import './books.scss'

const Books = () => {
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

export default Books
