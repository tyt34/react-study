import React, { useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import "./cards-select.scss";
import { changeCount, ICount } from "./cards-select.slice";

const arrOption = [
  ["", "All"],
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
];

const CardsSelect = () => {
  const [count, setCount] = useState<ICount>("");
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="cards-select">
        <section className="select-cards">
          <select
            className="main-cards__select"
            value={count}
            onChange={(e) => {
              dispatch(changeCount(e.target.value as ICount));
              setCount(e.target.value as ICount);
            }}>
            {arrOption.map((opt) => {
              return (
                <option key={opt[0]} value={opt[0]}>
                  {opt[1]}
                </option>
              );
            })}
          </select>
        </section>
      </section>
    </>
  );
};

export default CardsSelect;
