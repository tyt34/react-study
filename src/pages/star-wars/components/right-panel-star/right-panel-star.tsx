import React, { memo, useEffect, useState } from 'react'
import { IDataStarWars, getDataDetail } from '../../../../api'
import { LoadingStar } from '../loading-star/loading-star'
import { Details } from '../details/details'
import { SybType } from './right-panel-star.types'

type Props = {
  type: string
  subType: string
}

const RightPanelStar = ({ type, subType }: Props) => {
  const [data, setData] = useState<SybType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (subType) {
      setIsLoading(true)
      const doFetch = async () => {
        const data = await getDataDetail(type as IDataStarWars, subType)
        setIsLoading(false)
        if (data?.name === 'Not found') {
          setData(null)
        } else {
          setData({ ...data })
        }
      }
      doFetch()
    } else {
      setData(null)
    }
  }, [type, subType])

  return (
    <>
      {isLoading && subType !== '' ? (
        <LoadingStar />
      ) : (
        <Details details={data} />
      )}
    </>
  )
}

export default memo(RightPanelStar)
