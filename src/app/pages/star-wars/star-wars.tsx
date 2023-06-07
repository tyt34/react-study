import React, { useEffect, useState, useMemo, memo } from 'react'
import { useNavigation, useParams } from 'react-router-dom'
import { getData, IDataStarWars } from '../../api'
import { useMoveMain } from '../../hooks/useMoveMain'
import { Header } from '../../component'
import { pages } from '../../route/config-pages'
import './star-wars.scss'
import Category from './components/Category/Category'
import CategoryData from './components/CategoryData/CategoryData'
import { useAnimated } from '../../hooks/useAnimated'

const arrCategory = ['Things', 'Planets', 'Starships']

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
  max_atmosphering_speed: 'Max atmosphering speed:',
  empty_info: 'Информация отсутствует'
}

// const Memo = ({ type }: any) => {
//   const divStyle = {
//     backgroundColor: 'blue'
//   }
//   // console.log(' m ')
//   return <div style={divStyle}>Hello</div>
// }

// const MemoMemo = memo(Memo, (prev: any, next: any) => {
//   // console.log({
//   //   a: prev,
//   //   b: next
//   // })
//   if (prev.type === next.type) {
//     return true
//   } else {
//     return false
//   }
// })

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
    max_atmosphering_speed: '',
    empty_info: ''
  })

  const { type, element } = useParams()

  // console.log({ type, element })

  const data = useMemo(
    () => JSON.stringify({ list, type: type ? type : '' }),
    [list, type]
  )

  // const navigation = useNavigation()

  // console.log({ navigation })

  const moveHandler = useMoveMain(pages.starWars.path)

  // useEffect(() => {
  //   console.log(' --> ')
  // }, [])

  useEffect(() => {
    setDetails({ name: '' })

    if (element !== undefined) {
      const doFetch = async () => {
        const data = await getData(type as IDataStarWars, element)
        if (data.detail === 'Not found') {
          setDetails({ empty_info: '' })
        } else {
          setDetails({ ...data })
        }
      }
      doFetch()
    }
  }, [type, element])

  return (
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
        {arrCategory.map((nameCategory) => {
          return (
            <a
              key={nameCategory}
              className="star__link"
              href={pages[nameCategory.toLowerCase()].pathForWatch}
              onClick={() => {
                // console.log({
                //   a: pages[nameCategory.toLowerCase()].path
                // })
                moveHandler(pages[nameCategory.toLowerCase()].path)
              }}
            >
              {nameCategory}
            </a>
          )
        })}
      </nav>

      <div className="star__grid">
        <section className="list">
          {/* <MemoMemo type={type ? type : ''} /> */}

          <Category
            list={list}
            type={type ? type : ''}
          />

          <CategoryData
            dataJSON={data}
            a={'a'}
          />
        </section>
        {details.name !== '' ? (
          <section className="details">
            <>
              {Object.keys(details).map((key: string) => {
                return (
                  <p key={key}>
                    {fieldsMap[key] ? (
                      <>
                        {fieldsMap[key]} {details[key]}
                      </>
                    ) : null}
                  </p>
                )
              })}
            </>
          </section>
        ) : null}
      </div>
    </section>
  )
}
