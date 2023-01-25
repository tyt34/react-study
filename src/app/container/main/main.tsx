import React, { useState } from "react";
import ButtonsFilter from "./components/buttons-filter/buttons-filter";
import Create from "./components/create/create";
import Search from "./components/search/search";
import TodoList from "./components/todo-list/todo-list";
import "./main.scss";

export type IItem = {
  id: number;
  text: string;
  done: boolean;
};

const arrText: IItem[] = [
  { id: 1, text: "item 1", done: false },
  { id: 2, text: "item 2", done: false },
  { id: 3, text: "item 3", done: false },
];

const Main = () => {
  const [arr, setArr] = useState(arrText);
  const [filterText, setFilterText] = useState("");

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  function remove(id: number) {
    setArr((prevState) => {
      const removeArr = prevState.filter((el) => el.id !== id);
      return removeArr;
    });
  }

  function add(name: string) {
    console.log(" new el: ", name);
    const newId = arr.length + 1; // плохой способ
    setArr((prevState) => {
      return [
        ...prevState,
        {
          id: newId,
          text: name,
          done: false,
        },
      ];
    });
  }

  function doLineThrough(id: number) {
    console.log(" do id: ", id);
    let newArr = arr.map((el) => {
      if (el.id === id) {
        console.log(" el d: ", el.done);
        return {
          ...el,
          done: !el.done,
        };
      } else {
        return el;
      }
    });
    setArr((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          console.log(" el d: ", el.done);
          return {
            ...el,
            done: !el.done,
          };
        } else {
          return el;
        }
      });
    });
    console.log(" new arr: ", newArr);
  }

  return (
    <>
      <section className="main">
        <div className="main__top">
          <h1 className="main__text">Todo List</h1>
          <p> 1 task for work, 2 done</p>
        </div>

        <div className="main__setting fc">
          <Search
            filterText={filterText}
            handleChangeFilter={handleChangeFilter}
          />
          <ButtonsFilter />
        </div>

        <TodoList
          arr={arr}
          remove={remove}
          filterText={filterText}
          doLineThrough={doLineThrough}
        />

        <Create add={add} />
      </section>
    </>
  );
};

export default Main;
