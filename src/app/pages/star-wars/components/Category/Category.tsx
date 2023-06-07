import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IDataStarWars, getData } from '../../../../api'
import { useAnimated } from '../../../../hooks/useAnimated'

type Props = {
  list: Record<string, string>[]
  type: string
}

const Category = ({ type }: Props) => {
  const [list, setList] = useState<Record<string, string>[]>([])

  const navigate = useNavigate()

  // const { setLinkArr } = useAnimated()
  //
  // console.log({ type })

  // useEffect(() => {
  //   setLinkArr((prev) => [...prev, type ? type : ''])
  // }, [type])

  const changePage = (page: string): void => {
    navigate(page)
  }

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

  // console.log(' с ')

  return (
    <>
      {list?.length
        ? list.map((el, i: number) => {
            return (
              <div
                key={el.name}
                className="list__el"
                onClick={() => {
                  changePage(`/s-w-d/${type}/${i + 1}`)
                }}
              >
                {el.name}
              </div>
            )
          })
        : null}
    </>
  )
}

export default memo(Category, (prev: Props, next: Props) => {
  // console.log({
  //   a: prev?.type,
  //   b: next?.type,
  //   c:
  //     prev?.type === next?.type && prev.list.length === next.list.length
  // })
  if (prev?.type === next?.type) {
    // console.log(' --> t')
    return true
  } else {
    // console.log(' --> f')
    return false
  }
})
