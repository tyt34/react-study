import { pages } from '../../../../route/config-pages'
import { Link } from 'react-router-dom'

const Title = () => {
  console.log(' t ')
  return (
    <h2>
      <Link
        to={pages.starWars.path}
        className="star__link"
      >
        Star Wars Database
      </Link>
    </h2>
  )
}

export default Title
