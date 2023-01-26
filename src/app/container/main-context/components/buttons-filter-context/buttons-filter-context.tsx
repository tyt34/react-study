import { Box, Button, ButtonGroup } from "@mui/material";
import React, { FC, memo, useState } from "react";
import { ITypeButton } from "../../main-context";
import "./buttons-filter-context.scss";

type IButton = {
  variant: "text" | "outlined" | "contained";
  text: ITypeButton;
};

const buttons: IButton[] = [
  {
    variant: "contained",
    text: "All",
  },
  {
    variant: "outlined",
    text: "Active",
  },
  {
    variant: "outlined",
    text: "Done",
  },
];

type Props = {
  handleChangeButtonFilter: (button: ITypeButton) => void;
};

const ButtonsFilterContext: FC<Props> = ({ handleChangeButtonFilter }) => {
  const [buts, setButs] = useState(buttons);

  function changeVariant(text: ITypeButton) {
    setButs((prev) => {
      return prev.map((but: IButton) => {
        return {
          ...but,
          variant: but.text !== text ? "outlined" : "contained",
        };
      });
    });
    handleChangeButtonFilter(text);
  }

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
            {buts.map((but) => (
              <Button
                onClick={() => {
                  changeVariant(but.text);
                }}
                variant={but.variant}
                key={but.text}>
                {but.text}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </section>
    </>
  );
};

//export default ButtonsFilterContext;
export default memo(ButtonsFilterContext, () => true);
