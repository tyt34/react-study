import { TextField } from "@mui/material";
import React, { FC, memo } from "react";
import "./search.scss";

export type Props = {
  filterText: string;
  handleChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: FC<Props> = ({ filterText, handleChangeFilter }) => {
  return (
    <div className="fc fdc">
      <TextField
        size="small"
        id="outlined-basic"
        label="Search task"
        variant="outlined"
        value={filterText}
        onChange={handleChangeFilter}
      />
    </div>
  );
};

export default Search;
//export default memo(Search, () => true);
