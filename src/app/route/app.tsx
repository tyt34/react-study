import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.scss";
import Books from "../container/books/books";
import GraphForm from "../container/graph-form/graph-form";
import { arrText } from "../container/main-context/components/todo-list-context/todo-list-context";
import MainContext, { IItem } from "../container/main-context/main-context";
import Main from "../container/main/main";
import NavPage from "../container/nav-page/nav-page";
import StarWars from "../container/star-wars/star-wars";
import GraphApollo from "../container/graph-apollo/graph-apollo";

export const pages = {
  todo: {
    path: "/Todo-list",
    pathForWatch: "#/Todo-list",
  },
  todoContext: {
    path: "/Todo-context",
    pathForWatch: "#/Todo-context",
  },
  starWars: {
    path: "/s-w-d",
    pathForWatch: "#/s-w-d",
    pathType: "/s-w-d/:type",
    pathElement: "/s-w-d/:type/:element",
    things: {
      path: "/s-w-d/things",
      pathForWatch: "#/s-w-d/Things",
    },
    planets: {
      path: "/s-w-d/planets",
      pathForWatch: "#/s-w-d/Planets",
    },
    starships: {
      path: "/s-w-d/starships",
      pathForWatch: "#/s-w-d/Starships",
    },
  },
  books: {
    path: "/Books",
    pathForWatch: "#/Books",
  },
  nav: {
    path: "/Main",
    pathForWatch: "#/Main",
  },
  graphQLReq: {
    path: "/grofqel",
    pathForWatch: "#/grofqel",
  },
  graphQLApollo: {
    path: "/grofqel-apollo",
    pathForWatch: "#/grofqel-apollo",
  },
};

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldegfjzh10l101un8ft894qn/master",
  cache: new InMemoryCache(),
});

export const Context = React.createContext(
  null as unknown as [React.Dispatch<React.SetStateAction<IItem[]>>, IItem[]]
);

const App = () => {
  const [arrConext, setArrContext] = useState(arrText);

  return (
    <section className="app">
      <ApolloProvider client={client}>
        <HashRouter basename={"/"}>
          <Routes>
            <Route
              path={"/"}
              element={<Navigate replace to={pages.nav.path} />}
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
                  <Main />
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
                  <GraphForm />
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
              path={pages.todoContext.path}
              element={
                <>
                  <Context.Provider value={[setArrContext, arrConext]}>
                    <MainContext />
                  </Context.Provider>
                </>
              }
            />
            <Route
              path="/*"
              element={<Navigate replace to={pages.nav.path} />}
            />
          </Routes>
        </HashRouter>
      </ApolloProvider>
    </section>
  );
};

export default App;
