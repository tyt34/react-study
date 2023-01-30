import { List } from "@mui/material";
import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../../../route/app";
import { getUniqueId } from "../../../../utils/utils";
import { IItem, ITypeButton } from "../../main-context";
import ItemContext from "./components/item/item-context";
import "./todo-list-context.scss";

interface Props {
  filterText: string;
  newEl: string;
  filterButton: ITypeButton;
}

export const arrText: IItem[] = [
  { id: getUniqueId(2), text: "item 1", done: true },
  { id: getUniqueId(2), text: "item 2", done: false },
  { id: getUniqueId(2), text: "item 3", done: false },
];

const TodoListContext: FC<Props> = ({ filterText, newEl, filterButton }) => {
  const [numTask, setNumTask] = useState("");
  const [setContextArr, contextArr] = useContext(Context);

  useEffect(() => {
    const lenForWork = contextArr.reduce((num, el) => {
      return el.done === true ? num : (num = num + 1);
    }, 0);
    const lenDone = contextArr.reduce((num, el) => {
      return el.done === true ? (num = num + 1) : num;
    }, 0);
    setNumTask(`${lenForWork} for work, ${lenDone} done`);
  }, [contextArr]);

  function remove(id: string) {
    setContextArr((prevState) => {
      const removeArr = prevState.filter((el) => el.id !== id);
      return removeArr;
    });
  }

  function doLineThrough(id: string) {
    setContextArr((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            done: !el.done,
          };
        } else {
          return el;
        }
      });
    });
  }

  function statusFilterButton(filterButton: ITypeButton, done: boolean) {
    if (
      (done === true && filterButton === "Done") ||
      (done === false && filterButton === "Active") ||
      filterButton === "All"
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <section className="todo-list">
      <p> {numTask} </p>
      <List>
        {contextArr.reduce((acc, item) => {
          statusFilterButton(filterButton, item.done) &&
            item.text.indexOf(filterText) >= 0 &&
            acc.push(
              <ItemContext
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

export default TodoListContext;
