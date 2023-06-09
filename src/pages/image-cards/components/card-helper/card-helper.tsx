import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { arrOptionHelp } from './mock-data'

import styles from './card-helper.module.scss'

export const CardHelper = () => {
  const [selectHelp, setSelectHelp] = useState('1')

  return (
    <>
      <section className={styles.helper}>
        <p className={styles.mp}>Card helper:</p>
        <div className={styles.options}>
          <select
            className={styles.select}
            value={selectHelp}
            onChange={(e) => setSelectHelp(e.target.value)}
          >
            {arrOptionHelp.map((opt) => {
              return (
                <option
                  key={opt[0]}
                  value={opt[0]}
                >
                  {opt[0]}
                </option>
              )
            })}
          </select>

          <TextField
            sx={{
              marginLeft: '15px'
            }}
            id="outlined-multiline-static"
            label="Ready url"
            multiline
            rows={2}
            value={arrOptionHelp[+selectHelp - 1][1]}
          />
        </div>
      </section>
    </>
  )
}
