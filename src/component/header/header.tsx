import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { pages } from '../../app/config-pages'

export const titleText = 'Main page'

export const Header = () => {
  return (
    <h1>
      <Link
        to={pages.nav.path}
        className="header"
      >
        {titleText}
      </Link>
    </h1>
  )
}
