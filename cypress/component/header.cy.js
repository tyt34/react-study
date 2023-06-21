import React from 'react'
import { Provider } from 'react-redux'
import { Header, titleText } from '../../src/app/component/header'
import { HashRouter } from 'react-router-dom'
import { store } from '../../src/app/store/store'

describe('Test component Header', () => {
  it('Component have a text', () => {
    cy.mount(
      <Provider store={store}>
        <HashRouter basename={'/'}>
          <Header />
        </HashRouter>
      </Provider>
    )
    /**
     * Проверка, что есть тег h1 с классом header
     * в котором есть текст Main page
     */
    cy.get('h1.header').should('contain', titleText)
  })
})
