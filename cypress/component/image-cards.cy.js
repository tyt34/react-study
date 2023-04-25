/* eslint-disable no-undef */
import { Provider } from 'react-redux'
import { Header } from '../../src/app/component/header'
import { HashRouter } from 'react-router-dom'
import { store } from '../../src/app/store/store'

describe('image-cards.cy.tsx', () => {
  it('playground', () => {
    cy.mount(
      <Provider store={store}>
        <HashRouter basename={'/'}>
          <Header />
        </HashRouter>
      </Provider>
    )
    cy.get('h1').should('contains.text', 'Main page')
  })
})
