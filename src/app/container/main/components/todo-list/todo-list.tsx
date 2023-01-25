import { List } from "@mui/material";
import React, { FC } from "react";
import { IItem } from "../../main";
import Item from "./components/item/item";
import "./todo-list.scss";

interface Props {
  arr: IItem[];
  filterText: string;
  remove: (text: number) => void;
  doLineThrough: (id: number) => void;
}

const TodoList: FC<Props> = ({ arr, filterText, remove, doLineThrough }) => {
  console.log(" arrr: ", arr);
  return (
    <section className="todo-list">
      <List>
        {arr.reduce((acc, item) => {
          item.text.indexOf(filterText) >= 0 &&
            acc.push(
              <Item
                key={item.id}
                text={item.text}
                id={item.id}
                done={item.done}
                remove={remove}
                doLineThrough={doLineThrough}
              />
            );
          return acc;
        }, [] as JSX.Element[])}
      </List>
    </section>
  );
};

export default TodoList;
