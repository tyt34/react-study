import React, { FC, useContext } from 'react'
import { TextField } from '@mui/material'
import { Context } from '../../../../app/app'

export const SearchContext: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [setArr, arr, setFilter] = useContext(Context)
  return (
    <div className="fc fdc">
      <TextField
        size="small"
        id="outlined-basic"
        label="Search task"
        variant="outlined"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  )
}
