import React from "react";
import Header from "../../component/header/header";
import "./books.scss";
import Order from "./components/order/order";
import Restore from "./components/restore/restore";

const Books = () => {
  return (
    <>
      <Header />
      <section className="books">
        <Restore />
        <Order />
      </section>
    </>
  );
};

export default Books;
