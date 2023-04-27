/* eslint-disable no-undef */
import { Provider } from 'react-redux'
import { CardsList } from '../../src/app/pages/image-cards/components/cards-list'
import { HashRouter } from 'react-router-dom'
import { store } from '../../src/app/store/store'
import { mockData } from './mock-data'

beforeEach(() => {
  cy.clearLocalStorage()
  cy.clearCookies()
  cy.window().then((win) => {
    win.sessionStorage.clear()
  })
})

const timePause = 200

describe('Test component CardsList', () => {
  it('Component have a text', () => {
    cy.mount(
      <Provider store={store}>
        <HashRouter basename={'/'}>
          <CardsList />
        </HashRouter>
      </Provider>
    )

    cy.intercept('GET', 'http://localhost:3001/cards*', mockData).as(
      'getData'
    )

    cy.wait('@getData').then((data) => {
      expect(data.response.statusCode).to.eq(timePause)
    })
    cy.scrollTo('bottom').wait(timePause)
    cy.scrollTo('left').wait(timePause)

    /**
     * я не нашел как проверить, чтобы был отправлен запрос автоматически,
     * поэтому сделал проверку на высоту экрана и на количество элементов
     * на странице
     */
    cy.window().its('innerHeight').should('eq', 500).wait(timePause)
    cy.get('.card').should('have.length', 20)
  })
})
