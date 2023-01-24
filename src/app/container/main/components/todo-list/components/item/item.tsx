import { Button } from "@mui/material";
import React, { FC, memo, useState } from "react";
import "./item.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

interface Props {
  text: string;
  remove: (text: number) => void;
  id: number;
}

const Item: FC<Props> = ({ text, remove, id }) => {
  const [bold, setBold] = useState(false);
  const [lineThrough, setLineThrough] = useState(false);

  function clickBold() {
    setBold(!bold);
  }

  function clickLineThrough() {
    setLineThrough(!lineThrough);
  }

  return (
    <section className="item fc">
      <span
        onClick={clickLineThrough}
        className={bold ? "bold item__text" : "item__text"}>
        <span className={lineThrough ? "lineThrough" : ""}>{text}</span>
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
          <CheckIcon />
        </Button>
      </div>
    </section>
  );
};

export default memo(Item, () => true);
