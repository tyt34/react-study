import React from "react";
import "./header.scss";
import { useMoveMain } from "../../hooks/useMoveMain";

const Header = () => {
  const moveMain = useMoveMain();

  return (
    <>
      <h1
        className="header"
        onClick={() => {
          moveMain();
        }}>
        Main page
      </h1>
    </>
  );
};

export default Header;
