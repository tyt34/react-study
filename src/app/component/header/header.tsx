import './header.scss'
import { Link } from 'react-router-dom'
import { pages } from '../../route/config-pages'

export const titleText = 'Main page'

export const Header = () => {
  console.log(' h')

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
