/* eslint-disable no-undef */
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { store } from '../../src/app/store/store'
import {
  TodoList,
  arrText
} from '../../src/app/pages/todo/components/todo-list/todo-list'

const testConf = {
  amounLineThrough: 0,
  amountBold: 0
}

arrText.forEach((el) => {
  if (el.done) {
    testConf.amounLineThrough = testConf.amounLineThrough + 1
  }
})

describe('Test component TodoList', () => {
  it('Component have a text', () => {
    cy.mount(
      <Provider store={store}>
        <HashRouter basename={'/'}>
          <TodoList
            filterText=""
            newEl=""
            filterButton="All"
          />
        </HashRouter>
      </Provider>
    )

    cy.get('.item ').should('have.length', arrText.length)
    cy.get('.lineThrough ').should(
      'have.length',
      testConf.amounLineThrough
    )

    /**
     * Проверка, что при клике по тексту item
     * меняется количество элементов с классом lineThrough на 1
     */
    cy.get('.item__text').eq(1).click()
    cy.get('.lineThrough ').should(
      'have.length',
      testConf.amounLineThrough + 1
    )

    /**
     * Проверка, что при клике на кнопку "восклицательного знака",
     * текст получает класс bold
     */
    cy.get('.item__buttons').eq(2).find('button').eq(1).click()
    cy.get('.item').eq(2).find('.bold').should('exist')

    /**
     * Проверка, что при клике на "удаление",
     * строка удаляется
     */
    const elForDelete = cy.get('.item').eq(1)
    elForDelete.invoke('attr', 'id', 'need-del')
    cy.get('#need-del').should('exist')
    cy.get('.item__buttons').eq(1).find('button').eq(0).click()
    cy.get('#need-del').should('not.exist')
  })
})
