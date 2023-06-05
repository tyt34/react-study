import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  dataJSON: string
  a: string
}

const CategoryData = ({ dataJSON }: Props) => {
  const navigate = useNavigate()

  const changePage = (page: string): void => {
    navigate(page)
  }

  const data = JSON.parse(dataJSON)

  console.log(' cd ')

  return (
    <>
      {data.list.length
        ? data.list.map((el: any, i: number) => {
            return (
              <div
                key={el.name}
                className="list__el"
                onClick={() => {
                  changePage(`/s-w-d/${data.type}/${i + 1}`)
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

export default memo(CategoryData, (prev: Props, next: Props) => {
  console.log({
    a: prev.dataJSON,
    b: next.dataJSON,
    c: prev.dataJSON === next.dataJSON,
    d: prev.a === next.a
  })
  if (prev === next) {
    return true
  } else {
    return false
  }
})
