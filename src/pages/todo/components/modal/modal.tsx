import React, { FC } from 'react'
import { Button } from '@mui/material'
import './modal.scss'

type Props = {
  onClose: () => void
}

export const ModalContent: FC<Props> = ({ onClose }) => {
  return (
    <div className="modal">
      <div>I&apos;m a modal dialog</div>
      <Button onClick={onClose}>Close</Button>
    </div>
  )
}
