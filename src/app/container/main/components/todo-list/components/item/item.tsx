import { Button } from "@mui/material";
import React, { FC, memo, useState } from "react";
import "./item.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

interface Props {
  text: string;
  id: number;
  done: boolean;
  remove: (text: number) => void;
  doLineThrough: (id: number) => void;
}

const Item: FC<Props> = ({ text, id, done, remove, doLineThrough }) => {
  console.log(" done: ", id, done);
  const [bold, setBold] = useState(false);
  // const [lineThrough, setLineThrough] = useState(false);

  function clickBold() {
    setBold(!bold);
  }

  // function clickLineThrough() {
  //   // setLineThrough(!lineThrough);
  // }

  return (
    <section className="item fc">
      <span
        onClick={() => {
          doLineThrough(id);
        }}
        className={bold ? "bold item__text" : "item__text"}>
        <span className={done ? "lineThrough" : ""}>{text}</span>
      </span>
      <div className="item__buttons">
        <Button
          onClick={() => {
            remove(id);
          }}
          sx={{ marginRight: "10px" }}
          color="warning"
          variant="outlined">
          <DeleteIcon />
        </Button>
        <Button onClick={clickBold} variant="outlined">
          <PriorityHighIcon />
        </Button>
      </div>
    </section>
  );
};

function areEqual(prev: Props, next: Props): boolean {
  if (prev.done !== next.done) {
    return false;
  } else {
    return true;
  }
}

//export default memo(Item, () => true);
export default memo(Item, areEqual);
//export default Item;
