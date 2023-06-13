import React from 'react'
import { Header } from '../../component'
import Title from './components/title/title'
import { Info } from './components/info/info'
import './star-wars.scss'

export const StarWars = () => {
  return (
    <section className="star">
      <Header />
      <Title />
      <Info />
    </section>
  )
}
