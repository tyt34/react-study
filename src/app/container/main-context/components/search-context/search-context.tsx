import { TextField } from "@mui/material";
import React, { FC } from "react";
import "./search-context.scss";

export type Props = {
  handleChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchContext: FC<Props> = ({ handleChangeFilter }) => {
  return (
    <div className="fc fdc">
      <TextField
        size="small"
        id="outlined-basic"
        label="Search task"
        variant="outlined"
        onChange={handleChangeFilter}
      />
    </div>
  );
};

export default SearchContext;
