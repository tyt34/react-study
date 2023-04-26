/* eslint-disable no-undef */
import { Provider } from 'react-redux'
import { Header } from '../../src/app/component/header'
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
    // cy.get('cards-list').should('contains', 'Main page')
  })
})
