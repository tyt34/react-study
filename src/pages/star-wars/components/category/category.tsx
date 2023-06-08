import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IDataStarWars, getData } from '../../../../api'
import { motion } from 'framer-motion'
import styles from './category.module.scss'

type Props = {
  type: string
  subType: string
}

const Category = ({ type, subType }: Props) => {
  const [list, setList] = useState<Record<string, string>[]>([])

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
    <motion.section
      className={styles.list}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 5.9 }}
    >
      {list?.length
        ? list.map((el, i: number) => (
            <Link
              key={el.name}
              className={
                `${i + 1}` === subType
                  ? `${styles.elementActive} ${styles.element}`
                  : `${styles.elementDeactive} ${styles.element}`
              }
              to={`/s-w-d/${type}/${i + 1}`}
            >
              {el.name}
            </Link>
          ))
        : null}
    </motion.section>
  )
}

export default memo(Category)
