import React, { FC, memo, useState } from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import './item-context.scss'

interface Props {
  text: string
  id: string
  done: boolean
  remove: (text: string) => void
  doLineThrough: (id: string) => void
}

const ItemContext: FC<Props> = ({
  text,
  id,
  done,
  remove,
  doLineThrough
}) => {
  const [bold, setBold] = useState(false)

  function clickBold() {
    setBold(!bold)
  }

  console.log({ text })

  return (
    <section className="item fc">
      <span
        onClick={() => {
          doLineThrough(id)
        }}
        className={bold ? 'bold item__text' : 'item__text'}
      >
        <span className={done ? 'lineThrough' : ''}>{text}</span>
      </span>
      <div className="item__buttons">
        <Button
          onClick={() => {
            remove(id)
          }}
          sx={{ marginRight: '10px' }}
          color="warning"
          variant="outlined"
        >
          <DeleteIcon />
        </Button>
        <Button
          onClick={clickBold}
          variant="outlined"
        >
          <PriorityHighIcon />
        </Button>
      </div>
    </section>
  )
}

function areEqual(prev: Props, next: Props): boolean {
  if (prev.done !== next.done) {
    return false
  } else {
    return true
  }
}

//export default memo(Item, () => true);
export const ItemContextMemo = memo(ItemContext, areEqual)
//export default ItemContext;
