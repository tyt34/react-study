import React from 'react'
import { Link } from 'react-router-dom'
import { pages } from '../../app/config-pages'

import './header.scss'

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
