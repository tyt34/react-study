import React from "react";
import ButtonsFilter from "./components/buttons-filter/buttons-filter";
import Search from "./components/search/search";
import TodoList from "./components/todo-list/todo-list";
import "./main.scss";

const Main = () => {
  return (
    <>
      <section className="main">
        <div className="main__top">
          <h1 className="main__text">Todo List</h1>
          <p> 1 task for work, 2 done</p>
        </div>

        <div className="main__setting fc">
          <Search />
          <ButtonsFilter />
        </div>

        <TodoList />
      </section>
    </>
  );
};

export default Main;
