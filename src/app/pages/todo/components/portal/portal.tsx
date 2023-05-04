import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalContent } from '../modal'
import { Button } from '@mui/material'

export const PortalExample = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </Button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  )
}
