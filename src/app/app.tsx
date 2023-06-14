import React, { Dispatch, useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import TodoPage, { IItem } from '../pages/todo/todo'
import { arrText } from '../pages/todo-context/components/todo-list-context/todo-list-context'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ImageCards } from '../pages/image-cards/image-cards'
import { pages } from './config-pages'
import {
  Books,
  GraphApollo,
  GraphReq,
  NavPage,
  StarWars,
  TodoContextPage
} from '../pages'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client'

import './app.scss'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldegfjzh10l101un8ft894qn/master',
  cache: new InMemoryCache()
})

type ContextValue = [
  Dispatch<React.SetStateAction<IItem[]>>,
  IItem[],
  React.Dispatch<string>,
  string
]

export const Context = React.createContext(
  null as unknown as ContextValue
)

export const App = () => {
  const [arrConext, setArrContext] = useState(arrText)
  const [filterText, setFilterText] = useState('')
  const configRoutes: {
    key: string | number
    path: string | undefined
    element: JSX.Element
  }[] = [
    {
      key: 'first',
      path: '/',
      element: (
        <Navigate
          replace
          to={pages.nav.path}
        />
      )
    },
    {
      key: 1,
      path: pages.nav.path,
      element: <NavPage />
    },
    { key: 2, path: pages.starWars.pathType, element: <StarWars /> },
    { key: 3, path: pages.starWars.pathElement, element: <StarWars /> },
    { key: 4, path: pages.starWars.path, element: <StarWars /> },
    { key: 6, path: pages.todo.path, element: <TodoPage /> },
    { key: 6, path: pages.books.path, element: <Books /> },
    { key: 7, path: pages.graphQLReq.path, element: <GraphReq /> },
    {
      key: 8,
      path: pages.graphQLApollo.path,
      element: <GraphApollo />
    },
    { key: 9, path: pages.imageCards.path, element: <ImageCards /> },
    {
      key: 10,
      path: pages.todoContext.path,
      element: (
        <>
          <Context.Provider
            value={[
              setArrContext,
              arrConext,
              setFilterText,
              filterText
            ]}
          >
            <TodoContextPage />
          </Context.Provider>
        </>
      )
    },
    {
      key: 'last',
      path: '/*',
      element: (
        <Navigate
          replace
          to={pages.nav.path}
        />
      )
    }
  ]

  return (
    <section className="app">
      <ApolloProvider client={client}>
        <Provider store={store}>
          <HashRouter basename={'/'}>
            <Routes>
              {configRoutes.map((route) => {
                return (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={route.element}
                  />
                )
              })}
            </Routes>
          </HashRouter>
        </Provider>
      </ApolloProvider>
    </section>
  )
}
