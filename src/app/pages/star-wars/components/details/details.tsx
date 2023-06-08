import React, { memo, useEffect, useState } from 'react'
import { IDataStarWars, getData } from '../../../../api'

type Props = {
  type: string
  subType: string
}

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

const emptyObj = {
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
}

const Details = ({ subType, type }: Props) => {
  const [details, setDetails] =
    useState<Record<string, string>>(emptyObj)

  console.log(' d ', subType)

  useEffect(() => {
    if (subType) {
      const doFetch = async () => {
        const data = await getData(type as IDataStarWars, subType)
        if (data.detail === 'Not found') {
          setDetails({ empty_info: '' })
        } else {
          setDetails({ ...data })
        }
      }
      doFetch()
    } else {
      setDetails(emptyObj)
    }
  }, [type, subType])

  return (
    <>
      {details.name !== '' ? (
        <section className="details">
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
        </section>
      ) : null}
    </>
  )
}

export default memo(Details)

// export default memo(Details, (prev: Props, next: Props) => {
//   if (prev?.type === next?.type && prev?.subType === next?.subType) {
//     return true
//   } else {
//     return false
//   }
// })
