import React, { FC, useContext, useState } from 'react'
import { Button, TextField } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { Context } from '../../../../app/app'
import { getUniqueId } from '../../../../utils/utils'
import './create-context.scss'

interface Props {
  add: (name: string) => void
}

export const CreateContext: FC<Props> = () => {
  const [input, setInput] = useState('')
  const [setContextArr] = useContext(Context)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const createNewEL = (name: string) => {
    setContextArr((prevState) => {
      return [
        ...prevState,
        {
          id: getUniqueId(2),
          text: name,
          done: false
        }
      ]
    })
  }

  return (
    <>
      <section className="fc">
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
            createNewEL(input)
            setInput('')
          }}
        >
          <ControlPointIcon />
        </Button>
      </section>
    </>
  )
}
