import { Link } from 'react-router-dom'
import { pages } from '../../../../app/config-pages'
import { memo } from 'react'
import styles from './navigation-star.module.scss'

const arrCategory = ['Things', 'Planets', 'Starships']

type Props = {
  type: string
}

const NavigationStar = ({ type }: Props) => (
  <nav>
    <p>List data: </p>
    {arrCategory.map((nameCategory) => {
      return (
        <Link
          key={nameCategory}
          className={
            nameCategory.toLocaleLowerCase() ===
            type.toLocaleLowerCase()
              ? `${styles.linkActive} ${styles.link}`
              : `${styles.linkDeactive} ${styles.link}`
          }
          to={pages[nameCategory.toLowerCase()].path}
        >
          {nameCategory}
        </Link>
      )
    })}
  </nav>
)

export default memo(NavigationStar)
