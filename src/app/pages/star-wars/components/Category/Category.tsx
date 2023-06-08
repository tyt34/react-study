import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IDataStarWars, getData } from '../../../../api'

type Props = {
  type: string
}

const Category = ({ type }: Props) => {
  const [list, setList] = useState<Record<string, string>[]>([])

  console.log(' с ')

  useEffect(() => {
    if (type !== undefined) {
      const doFetch = async () => {
        const data = await getData(type as IDataStarWars)
        setList(data.results)
      }

      doFetch()
    } else {
      setList([])
    }
  }, [type])

  return (
    <>
      {list?.length
        ? list.map((el, i: number) => (
            <Link
              key={el.name}
              className="list__el"
              to={`/s-w-d/${type}/${i + 1}`}
            >
              {el.name}
            </Link>
          ))
        : null}
    </>
  )
}

export default memo(Category)
