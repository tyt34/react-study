import React from "react";
import { pages } from "../../app";
import { useMoveMain } from "../../hooks/useMoveMain";
import "./nav-page.scss";

const NavPage = () => {
  const moveStarWars = useMoveMain(pages.starWars.path);
  const moveTodo = useMoveMain(pages.todo.path);
  const moveTodoContext = useMoveMain(pages.todoContext.path);
  const moveBooks = useMoveMain(pages.books.path);
  const moveGraph = useMoveMain(pages.graphQL.path);

  return (
    <>
      <section className="navigation">
        <h1>Pages:</h1>
        <nav>
          <a
            className="navigation__link"
            href={pages.starWars.pathForWatch}
            onClick={() => {
              moveStarWars();
            }}>
            Star Wars
          </a>

          <a
            className="navigation__link"
            href={pages.todo.pathForWatch}
            onClick={() => {
              moveTodo();
            }}>
            Todo
          </a>

          <a
            className="navigation__link"
            href={pages.todoContext.pathForWatch}
            onClick={() => {
              moveTodoContext();
            }}>
            Todo Context
          </a>

          <a
            className="navigation__link"
            href={pages.books.pathForWatch}
            onClick={() => {
              moveBooks();
            }}>
            Books
          </a>

          <a
            className="navigation__link"
            href={pages.graphQL.pathForWatch}
            onClick={() => {
              moveGraph();
            }}>
            Graph-Q-Lll
          </a>
        </nav>
      </section>
    </>
  );
};

export default NavPage;
