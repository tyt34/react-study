import { List } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { getUniqueId } from "../../../../utils/utils";
import { IItem, ITypeButton } from "../../main-context";
import ItemContext from "./components/item/item-context";
import "./todo-list-context.scss";

interface Props {
  filterText: string;
  newEl: string;
  filterButton: ITypeButton;
}

const arrText: IItem[] = [
  { id: getUniqueId(2), text: "item 1", done: true },
  { id: getUniqueId(2), text: "item 2", done: false },
  { id: getUniqueId(2), text: "item 3", done: false },
];

const TodoListContext: FC<Props> = ({ filterText, newEl, filterButton }) => {
  const [arr, setArr] = useState(arrText);
  const [numTask, setNumTask] = useState("");

  useEffect(() => {
    const lenForWork = arr.reduce((num: any, el) => {
      return el.done === true ? num : (num = num + 1);
    }, 0);
    const lenDone = arr.reduce((num: any, el) => {
      return el.done === true ? (num = num + 1) : num;
    }, 0);
    setNumTask(`${lenForWork} for work, ${lenDone} done`);
  }, [arr]);

  useEffect(() => {
    if (newEl !== "") {
      setArr((prevState) => {
        return [
          ...prevState,
          {
            id: getUniqueId(2),
            text: newEl,
            done: false,
          },
        ];
      });
    }
  }, [newEl]);

  function remove(id: string) {
    setArr((prevState) => {
      const removeArr = prevState.filter((el) => el.id !== id);
      return removeArr;
    });
  }

  function doLineThrough(id: string) {
    setArr((prev) => {
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
    if (done === true && filterButton === "Done") {
      return true;
    } else if (done === false && filterButton === "Active") {
      return true;
    } else if (filterButton === "All") {
      return true;
    }
    return false;
  }

  return (
    <section className="todo-list">
      <p> {numTask} </p>
      <List>
        {arr.reduce((acc, item) => {
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
