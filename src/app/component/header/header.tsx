import React from 'react'
import { useMoveMain } from '../../hooks/useMoveMain'
import './header.scss'

export const titleText = 'Main page'

export const Header = () => {
  const moveMain = useMoveMain()

  return (
    <>
      <h1
        className="header"
        onClick={() => {
          moveMain()
        }}
      >
        {titleText}
      </h1>
    </>
  )
}
