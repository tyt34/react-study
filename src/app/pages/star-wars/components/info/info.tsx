import { Link, useParams } from 'react-router-dom'
import Category from '../category/category'
import Details from '../details/details'
import { pages } from '../../../../route/config-pages'

const arrCategory = ['Things', 'Planets', 'Starships']

export const Info = () => {
  const { type, subType } = useParams()
  console.log({ type, subType })
  return (
    <>
      <nav>
        <p>List data: </p>
        {arrCategory.map((nameCategory) => {
          return (
            <Link
              key={nameCategory}
              className="star__link"
              to={pages[nameCategory.toLowerCase()].path}
            >
              {nameCategory}
            </Link>
          )
        })}
      </nav>

      <div className="star__grid">
        <section className="list">
          <Category type={type ? type : ''} />
        </section>
        <Details
          type={type ? type : ''}
          subType={subType ? subType : ''}
        />
      </div>
    </>
  )
}
