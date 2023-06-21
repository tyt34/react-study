import React, { useState } from 'react'
import { asyncFibObj } from '../../../../utils/utils-corutine'

import styles from './todo-animation.module.scss'

export const TodoAnimation = () => {
  const [f, setF] = useState(0)
  const n = 1400

  console.log({
    fCor: asyncFibObj(n).then((res) => {
      setF(res.result)
      console.log(res.result)
    })
  })

  // return <div className={styles.animation}></div>
  return (
    <>
      <div>
        {n} число фибаначи это {f}
      </div>

      {/* {n} число фибаначи это {f.toString().split('.')[0]}
      {f.toString().split('.')[1][0]}
      {f.toString().split('.')[1][2]} и{' '}
      {f.toLocaleString('fullwide', { useGrouping: false }).length}{' '}
      числа после него */}
    </>
  )
}
