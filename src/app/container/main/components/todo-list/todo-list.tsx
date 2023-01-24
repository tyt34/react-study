import { List } from "@mui/material";
import React, { useState } from "react";
import Item from "./components/item/item";
import "./todo-list.scss";

export interface IItem {
  id: number;
  text: string;
}

const arrText: IItem[] = [
  { id: 1, text: "item 1" },
  { id: 2, text: "item 2" },
  { id: 3, text: "item 3" },
];

const TodoList = () => {
  const [arr, setArr] = useState(arrText);

  function remove(id: number) {
    setArr((prevState) => {
      const removeArr = prevState.filter((el) => el.id !== id);
      return removeArr;
    });
  }

  return (
    <section className="todo-list">
      <List>
        {arr.map((item) => (
          <Item key={item.id} text={item.text} remove={remove} id={item.id} />
        ))}
      </List>
    </section>
  );
};

export default TodoList;
