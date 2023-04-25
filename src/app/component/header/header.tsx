import React from 'react'
import { useMoveMain } from '../../hooks/useMoveMain'
import './header.scss'

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
        Main page
      </h1>
    </>
  )
}
