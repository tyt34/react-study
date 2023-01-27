import React from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../../app";
import "./books.scss";
import Order from "./components/order/order";
import Restore from "./components/restore/restore";

const Books = () => {
  const navigate = useNavigate();

  /**
   * Get data from store
   */
  //const abcText = useAbcText();

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
      <section className="books">
        <Restore />
        <Order />
      </section>
    </>
  );
};

export default Books;
