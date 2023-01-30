import { TextField } from "@mui/material";
import React, { FC, useContext } from "react";
import { Context } from "../../../../route/app";
import "./search-context.scss";

export type Props = {
  handleChangeFilter?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchContext: FC<Props> = ({ handleChangeFilter }) => {
  const [setArr, arr, setFilter] = useContext(Context);
  return (
    <div className="fc fdc">
      <TextField
        size="small"
        id="outlined-basic"
        label="Search task"
        variant="outlined"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchContext;
//export default memo(SearchContext, () => true);
