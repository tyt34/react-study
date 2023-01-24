import { Button, TextField } from "@mui/material";
import React from "react";
import "./search.scss";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const Search = () => {
  return (
    <div className="fc fdc">
      <TextField
        size="small"
        id="outlined-basic"
        label="Add new task"
        variant="outlined"
      />
      {/* <Button sx={{ marginTop: "10px" }} variant="outlined">
        <ControlPointIcon />
      </Button> */}
    </div>
  );
};

export default Search;
