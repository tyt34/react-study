import React, { FC } from 'react'
import { TextField } from '@mui/material'

import './search.scss'

export type Props = {
  handleChangeFilter: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export const Search: FC<Props> = ({ handleChangeFilter }) => {
  return (
    <div className="fc fdc">
      <TextField
        size="small"
        id="outlined-basic"
        label="Search task"
        variant="outlined"
        onChange={handleChangeFilter}
      />
    </div>
  )
}
