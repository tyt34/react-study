import React, { useState } from "react";
import Header from "../../component/header/header";
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
  // const [filterText, setFilterText] = useState("");
  const [filterButton, setFilterButton] = useState<ITypeButton>("All");
  const [newEl, setNewEl] = useState("");

  // const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilterText(event.target.value);
  // };

  const handleChangeButtonFilter = (button: ITypeButton) => {
    setFilterButton(button);
  };

  function add(name: string) {
    setNewEl(name);
  }

  return (
    <>
      <Header />
      <section className="main">
        <div className="main__top">
          <h1 className="main__text">Todo List (context)</h1>
        </div>

        <div className="main__setting fc">
          <SearchContext />
          <ButtonsFilterContext
            handleChangeButtonFilter={handleChangeButtonFilter}
          />
        </div>

        <TodoListContext newEl={newEl} filterButton={filterButton} />

        <CreateContext add={add} />
      </section>
    </>
  );
};

export default MainContext;
