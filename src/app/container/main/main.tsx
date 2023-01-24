import React from "react";
import Search from "./components/search/search";
import TodoList from "./components/todo-list/todo-list";
import "./main.scss";

const Main = () => {
  return (
    <>
      <section className="main">
        Main
        <Search />
        <TodoList />
      </section>
    </>
  );
};

export default Main;
