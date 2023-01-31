import React from "react";
import { pages } from "../../route/app";
// import { useMoveMain } from "../../hooks/useMoveMain";
import "./nav-page.scss";
import { useNavigate } from "react-router-dom";

const NavPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="navigation">
        <h1>Pages:</h1>
        <nav>
          <a
            className="navigation__link"
            href={pages.starWars.pathForWatch}
            onClick={() => {
              navigate(pages.starWars.path);
            }}>
            Star Wars
          </a>

          <a
            className="navigation__link"
            href={pages.todo.pathForWatch}
            onClick={() => {
              navigate(pages.todo.path);
            }}>
            Todo
          </a>

          <a
            className="navigation__link"
            href={pages.todoContext.pathForWatch}
            onClick={() => {
              navigate(pages.todoContext.path);
            }}>
            Todo Context
          </a>

          <a
            className="navigation__link"
            href={pages.books.pathForWatch}
            onClick={() => {
              navigate(pages.books.path);
            }}>
            Books
          </a>

          <a
            className="navigation__link"
            href={pages.graphQLReq.pathForWatch}
            onClick={() => {
              navigate(pages.graphQLReq.path);
            }}>
            Graph-Q-Req
          </a>

          <a
            className="navigation__link"
            href={pages.graphQLApollo.pathForWatch}
            onClick={() => {
              navigate(pages.graphQLApollo.path);
            }}>
            Graph-Q-Apollo
          </a>

          <a
            className="navigation__link"
            href={pages.imageCards.pathForWatch}
            onClick={() => {
              navigate(pages.imageCards.path);
            }}>
            Image of cards
          </a>
        </nav>
      </section>
    </>
  );
};

export default NavPage;
