/* eslint-disable jest/valid-title */
import React from 'react'
import { ImageCards } from './image-cards'
import { render } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

const mock = function () {
  return {
    observe: jest.fn(),
    disconnect: jest.fn()
  }
}

window.IntersectionObserver = mock

test(`Test 2. Stupid test for scroll.`, () => {
  render(
    <Provider store={store}>
      <HashRouter basename={'/'}>
        <ImageCards />
      </HashRouter>
    </Provider>
  )
  // render(<ImageCards />)
  const pos = 300
  global.scrollTo(0, pos)
  Object.defineProperty(global, 'scrollHeight', { value: pos })
  expect(window.scrollHeight).toBe(pos)
})
