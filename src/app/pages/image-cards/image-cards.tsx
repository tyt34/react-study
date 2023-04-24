import React from 'react'
import Header from '../../component/header/header'
import MainCards from './components/main-cards/main-cards'
//import ScrollDetected from "./components/scroll-detected/scroll-detected";
import './image-cards.scss'

export const ImageCards = () => {
  return (
    <>
      <Header />
      <MainCards />
      {/* <ScrollDetected /> */}
    </>
  )
}
