import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getData, IDataStarWars } from '../../api'
import { useMoveMain } from '../../hooks/useMoveMain'
import { Header } from '../../component'
import { pages } from '../../route/config-pages'
import './star-wars.scss'

const fieldsMap: Record<string, string> = {
  name: 'Name:',
  mass: 'Mass:',
  gender: 'Gender:',
  eye_color: 'Eye color:',
  gravity: 'Gravity:',
  orbital_period: 'Orbital period:',
  terrain: 'Terrain:',
  passengers: 'Passengers:',
  starship_class: 'Starship class:',
  max_atmosphering_speed: 'Max atmosphering speed:'
}

export const StarWars = () => {
  const [list, setList] = useState([])
  const [details, setDetails] = useState<Record<string, string>>({
    name: '',
    mass: '',
    gender: '',
    eye_color: '',
    gravity: '',
    orbital_period: '',
    terrain: '',
    passengers: '',
    starship_class: '',
    max_atmosphering_speed: ''
  })

  const { type, element } = useParams()

  const navigate = useNavigate()

  const changePage = (page: string): void => {
    navigate(page)
  }

  const moveHandler = useMoveMain(pages.starWars.path)

  useEffect(() => {
    setDetails({ name: '' })
    if (type !== undefined) {
      const doFetch = async () => {
        const data = await getData(type as IDataStarWars)
        setList(data.results)
      }

      doFetch()
    } else {
      setList([])
    }
    if (element !== undefined) {
      const doFetch = async () => {
        const data = await getData(type as IDataStarWars, element)
        setDetails({ ...data })
      }

      doFetch()
    }
  }, [type, element])

  return (
    <>
      <section className="star">
        <Header />
        <h2
          className="star__link"
          onClick={() => {
            moveHandler(pages.starWars.path)
          }}
        >
          Star Wars Database
        </h2>
        <nav>
          <p>List data: </p>
          <a
            className="star__link"
            href={pages.things.pathForWatch}
            onClick={() => {
              moveHandler(pages.things.path)
            }}
          >
            Things
          </a>
          <a
            className="star__link"
            href={pages.planets.pathForWatch}
            onClick={() => {
              moveHandler(pages.planets.path)
            }}
          >
            Planets
          </a>
          <a
            className="star__link"
            href={pages.starships.pathForWatch}
            onClick={() => {
              moveHandler(pages.starships.path)
            }}
          >
            Starships
          </a>
        </nav>

        <div className="star__grid">
          <section className="list">
            {list.length
              ? list.map((el: { name: string }, i) => {
                  return (
                    <div
                      key={el.name}
                      className="list__el"
                      onClick={() => {
                        changePage(`/s-w-d/${type}/${i + 1}`)
                      }}
                    >
                      {' '}
                      {el.name}{' '}
                    </div>
                  )
                })
              : null}
          </section>

          {details.name !== '' ? (
            <section className="details">
              <>
                {Object.keys(details).map((key: string) => {
                  return (
                    <>
                      <p>
                        {fieldsMap[key] ? (
                          <>
                            {fieldsMap[key]} {details[key]}
                          </>
                        ) : null}
                      </p>
                    </>
                  )
                })}
              </>
            </section>
          ) : null}
        </div>
      </section>
    </>
  )
}
