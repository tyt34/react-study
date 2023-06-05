import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  list: Record<string, string>[]
  type: string
}

const Category = ({ list, type }: Props) => {
  const navigate = useNavigate()

  const changePage = (page: string): void => {
    navigate(page)
  }

  console.log(' с ')

  return (
    <>
      {list.length
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
  console.log({ a: prev?.type, b: next?.type })
  if (
    prev?.type === next?.type &&
    prev.list.length === next.list.length
  ) {
    return true
  } else {
    return false
  }
})
