import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../../app";
import ButtonsFilterContext from "./components/buttons-filter-context/buttons-filter-context";
import CreateContext from "./components/create-context/create-context";
import SearchContext from "./components/search-context/search-context";
import TodoListContext from "./components/todo-list-context/todo-list-context";
import "./main-context.scss";

export type IItem = {
  id: string;
  text: string;
  done: boolean;
};

export type ITypeButton = "All" | "Active" | "Done";

const MainContext = () => {
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
      <h1
        className="main__link"
        onClick={() => {
          changePage(pages.nav.path);
        }}>
        Main page
      </h1>
      <section className="main">
        <div className="main__top">
          <h1 className="main__text">Todo List</h1>
        </div>

        <div className="main__setting fc">
          <SearchContext handleChangeFilter={handleChangeFilter} />
          <ButtonsFilterContext
            handleChangeButtonFilter={handleChangeButtonFilter}
          />
        </div>

        <TodoListContext
          filterText={filterText}
          newEl={newEl}
          filterButton={filterButton}
        />

        <CreateContext add={add} />
      </section>
    </>
  );
};

export default MainContext;
