import React from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../../app";
import "./nav-page.scss";

const NavPage = () => {
  const navigate = useNavigate();

  const changePage = (pageName: string): void => {
    navigate(pageName);
  };

  return (
    <>
      <section className="navigation">
        <h1>Pages:</h1>
        <nav>
          <a
            className="navigation__link"
            href={pages.starWars.pathForWatch}
            onClick={() => {
              changePage(pages.starWars.path);
            }}>
            Star Wars
          </a>
          <a
            className="navigation__link"
            href={pages.todo.pathForWatch}
            onClick={() => {
              changePage(pages.todo.path);
            }}>
            Todo
          </a>
        </nav>
      </section>
    </>
  );
};

export default NavPage;
