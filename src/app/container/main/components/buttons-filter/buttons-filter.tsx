import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import "./buttons-filter.scss";

const buttons = [
  <Button variant="contained" key="one">
    All
  </Button>,
  <Button key="two">Active</Button>,
  <Button key="three">Done</Button>,
];

const ButtonsFilter = () => {
  return (
    <>
      <section className="buttons-filter">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}>
          <ButtonGroup size="large" aria-label="large button group">
            {buttons}
          </ButtonGroup>
        </Box>
      </section>
    </>
  );
};

export default ButtonsFilter;
