import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.css";
import Main from "./container/main/main";
import NavPage from "./container/nav-page/nav-page";
import StarWars from "./container/star-wars/star-wars";

export const pages = {
  todo: {
    path: "/Todo-list",
    pathForWatch: "#/Todo-list",
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
  nav: {
    path: "/Main",
    pathForWatch: "#/Main",
  },
};

const App = () => {
  return (
    <section className="app">
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
          <Route path="/*" element={<Navigate replace to={pages.nav.path} />} />
        </Routes>
      </HashRouter>
    </section>
  );
};

export default App;
