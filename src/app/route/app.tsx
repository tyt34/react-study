import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client'
import React, { Dispatch, useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import TodoPage, { IItem } from '../pages/todo/todo'
import { arrText } from '../pages/todo-context/components/todo-list-context/todo-list-context'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import NavPage from '../pages/nav-page/nav-page'
import StarWars from '../pages/star-wars/star-wars'
import Books from '../pages/books/books'
import GraphApollo from '../pages/graph-apollo/graph-apollo'
import TodoContextPage from '../pages/todo-context/todo-context'
import './app.scss'
import GraphReq from '../pages/graph-req/graph-req'
import { ImageCards } from '../pages/image-cards/image-cards'

export const pages = {
  todo: {
    path: '/Todo-list',
    pathForWatch: '#/Todo-list'
  },
  todoContext: {
    path: '/Todo-context',
    pathForWatch: '#/Todo-context'
  },
  starWars: {
    path: '/s-w-d',
    pathForWatch: '#/s-w-d',
    pathType: '/s-w-d/:type',
    pathElement: '/s-w-d/:type/:element',
    things: {
      path: '/s-w-d/things',
      pathForWatch: '#/s-w-d/Things'
    },
    planets: {
      path: '/s-w-d/planets',
      pathForWatch: '#/s-w-d/Planets'
    },
    starships: {
      path: '/s-w-d/starships',
      pathForWatch: '#/s-w-d/Starships'
    }
  },
  books: {
    path: '/Books',
    pathForWatch: '#/Books'
  },
  nav: {
    path: '/Main',
    pathForWatch: '#/Main'
  },
  graphQLReq: {
    path: '/grofqel',
    pathForWatch: '#/grofqel'
  },
  graphQLApollo: {
    path: '/grofqel-apollo',
    pathForWatch: '#/grofqel-apollo'
  },
  imageCards: {
    path: '/image-cards',
    pathForWatch: '#/image-cards'
  }
}

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

const App = () => {
  const [arrConext, setArrContext] = useState(arrText)
  const [filterText, setFilterText] = useState('')
  return (
    <section className="app">
      <ApolloProvider client={client}>
        <Provider store={store}>
          <HashRouter basename={'/'}>
            <Routes>
              <Route
                path={'/'}
                element={
                  <Navigate
                    replace
                    to={pages.nav.path}
                  />
                }
              />

              <Route
                path={pages.nav.path}
                element={
                  <>
                    <NavPage />
                  </>
                }
              />

              <Route
                path={pages.starWars.pathType}
                element={
                  <>
                    <StarWars />
                  </>
                }
              />

              <Route
                path={pages.starWars.pathElement}
                element={
                  <>
                    <StarWars />
                  </>
                }
              />

              <Route
                path={pages.starWars.path}
                element={
                  <>
                    <StarWars />
                  </>
                }
              />

              <Route
                path={pages.todo.path}
                element={
                  <>
                    <TodoPage />
                  </>
                }
              />

              <Route
                path={pages.books.path}
                element={
                  <>
                    <Books />
                  </>
                }
              />

              <Route
                path={pages.graphQLReq.path}
                element={
                  <>
                    <GraphReq />
                  </>
                }
              />

              <Route
                path={pages.graphQLApollo.path}
                element={
                  <>
                    <GraphApollo />
                  </>
                }
              />

              <Route
                path={pages.imageCards.path}
                element={
                  <>
                    <ImageCards />
                  </>
                }
              />

              <Route
                path={pages.todoContext.path}
                element={
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
                }
              />

              <Route
                path="/*"
                element={
                  <Navigate
                    replace
                    to={pages.nav.path}
                  />
                }
              />
            </Routes>
          </HashRouter>
        </Provider>
      </ApolloProvider>
    </section>
  )
}

export default App
