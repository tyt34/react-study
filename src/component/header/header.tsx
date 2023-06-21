import React from 'react'
import { Link } from 'react-router-dom'
import { pages } from '../../app/config-pages'

import styles from './header.module.scss'

export const titleText = 'Main page'

export const Header = () => {
  return (
    <Link
      to={pages.nav.path}
      className={styles.header}
    >
      <h1 className={styles.text}>{titleText}</h1>
    </Link>
  )
}
