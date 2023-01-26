import React from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../../app";
import "./books.scss";

const Books = () => {
  const navigate = useNavigate();

  const changePage = (pageName: string): void => {
    navigate(pageName);
  };
  return (
    <>
      <h1
        className="main__link"
        onClick={() => {
          changePage(pages.nav.path);
        }}>
        Main page
      </h1>
      <section className="books"></section>
    </>
  );
};

export default Books;
