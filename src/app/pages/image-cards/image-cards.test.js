import { ImageCards } from './image-cards'
import React from 'react'
import { render, fireEvent, screen, act } from '@testing-library/react'

test('Test 2. Check scroll.', () => {
  render(<ImageCards />)
  const pos = 300
  window.scrollTo(0, pos)
  act(() => {
    fireEvent.scroll(window)
  })
  expect(window.pageYOffset).toBe(pos)
})
