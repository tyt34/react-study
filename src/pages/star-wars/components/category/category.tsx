import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IDataStarWars, getDataCategory } from '../../../../api'
import { motion } from 'framer-motion'
import {
  ThingsType,
  PlanetsType,
  StarshipsType
} from '../../../../api/start-wars/star-wars.types'

import styles from './category.module.scss'

type Props = {
  type: string
  subType: string
}

type ResultsCategory =
  | ThingsType['results']
  | PlanetsType['results']
  | StarshipsType['results']

const Category = ({ type, subType }: Props) => {
  const [list, setList] = useState<ResultsCategory>([])

  useEffect(() => {
    if (type) {
      const doFetch = async () => {
        const data = await getDataCategory(type as IDataStarWars)
        setList(data.results)
      }

      doFetch()
    } else {
      setList([])
    }
  }, [type])

  return (
    <motion.section className={styles.list}>
      {list?.length
        ? list.map((el, i: number) => (
            <Link
              className={styles.link}
              key={el.name}
              to={`/s-w-d/${type}/${i + 1}`}
            >
              <motion.p
                className={
                  `${i + 1}` === subType
                    ? `${styles.elementActive} ${styles.element}`
                    : `${styles.elementDeactive} ${styles.element}`
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {el.name}
              </motion.p>
            </Link>
          ))
        : null}
    </motion.section>
  )
}

export default memo(Category)
