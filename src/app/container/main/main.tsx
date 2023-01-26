import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../../app";
import ButtonsFilter from "./components/buttons-filter/buttons-filter";
import Create from "./components/create/create";
import Search from "./components/search/search";
import TodoList from "./components/todo-list/todo-list";
import "./main.scss";

export type IItem = {
  id: string;
  text: string;
  done: boolean;
};

export type ITypeButton = "All" | "Active" | "Done";

const Main = () => {
  const [filterText, setFilterText] = useState("");
  const [filterButton, setFilterButton] = useState<ITypeButton>("All");
  const [newEl, setNewEl] = useState("");

  const navigate = useNavigate();

  const changePage = (pageName: string): void => {
    navigate(pageName);
  };

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  const handleChangeButtonFilter = (button: ITypeButton) => {
    setFilterButton(button);
  };

  function add(name: string) {
    setNewEl(name);
  }

  return (
    <>
      <section className="main">
        <h1
          className="main__link"
          onClick={() => {
            changePage(pages.nav.path);
          }}>
          Main page
        </h1>
        <div className="main__top">
          <h1 className="main__text">Todo List</h1>
        </div>

        <div className="main__setting fc">
          <Search handleChangeFilter={handleChangeFilter} />
          <ButtonsFilter handleChangeButtonFilter={handleChangeButtonFilter} />
        </div>

        <TodoList
          filterText={filterText}
          newEl={newEl}
          filterButton={filterButton}
        />

        <Create add={add} />
      </section>
    </>
  );
};

export default Main;
