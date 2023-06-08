import { pages } from '../../../../app/config-pages'
import { Link } from 'react-router-dom'
import styles from './title.module.scss'

const Title = () => {
  return (
    <h2>
      <Link
        to={pages.starWars.path}
        className={styles.link}
      >
        Star Wars Database
      </Link>
    </h2>
  )
}

export default Title
