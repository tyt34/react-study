import React, { useState } from "react";
import Header from "../../component/header/header";
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
        <Header />
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
