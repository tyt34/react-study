import React, { FC, useState } from 'react'
import { Button, TextField } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

import styles from './create.module.scss'

interface Props {
  add: (name: string) => void
}

export const Create: FC<Props> = ({ add }) => {
  const [input, setInput] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <>
      <section className={styles.main}>
        <TextField
          size="small"
          id="outlined-basic"
          label="Add new task"
          variant="outlined"
          value={input}
          onChange={handleChange}
        />
        <Button
          sx={{ marginLeft: '10px' }}
          variant="outlined"
          onClick={() => {
            add(input)
            setInput('')
          }}
        >
          <ControlPointIcon />
        </Button>
      </section>
    </>
  )
}
