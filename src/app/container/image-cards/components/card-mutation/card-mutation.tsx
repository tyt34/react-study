import { Button, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import "./card-mutation.scss";
import BadgeIcon from "@mui/icons-material/Badge";
import { useAddCardMutation } from "../../../../api/image-cards/image-cards";
import { getUniqueId } from "../../../../utils/utils";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type Props = {
  text: string;
};

const formMutEmpty = {
  name: "",
  link: "",
};

const sizeButton = {
  width: "45px",
  height: "45px",
};

const CardMutation: FC<Props> = ({ text }) => {
  const [addCard] = useAddCardMutation();

  const [formMut, setFormMut] = useState(formMutEmpty);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormMut((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormMut((prevState) => ({
      ...prevState,
      link: event.target.value,
    }));
  };

  const arrTextField = [
    {
      label: "Input name img",
      value: formMut.name,
      onChange: handleChangeName,
    },
    {
      label: "Input link img",
      value: formMut.link,
      onChange: handleChangeLink,
    },
  ];

  const handleClickCreateOrChange = async () => {
    console.log(" --> ", formMut);
    if (formMut.name !== "" && formMut.link !== "") {
      console.log(" Add: ");
      await addCard({
        name: formMut.name,
        link: formMut.link,
        id: getUniqueId(2),
      }).unwrap();
    }

    setFormMut(formMutEmpty);
  };

  const handleClickDelete = () => {
    console.log(" Click del");
  };

  const arrayButtons = [
    {
      name: "change",
      sx: sizeButton,
      onClick: handleClickCreateOrChange,
      icon: <BadgeIcon />,
    },
    {
      name: "del",
      sx: sizeButton,
      onClick: handleClickDelete,
      icon: <DeleteForeverIcon />,
    },
  ];

  return (
    <section className="card-mutation">
      <div>
        {arrTextField.map((objField) => {
          return (
            <div key={objField.label} className="graph-form__input">
              <TextField
                className="graph-form__input"
                size="small"
                id="outlined-basic"
                label={objField.label}
                variant="outlined"
                value={objField.value}
                onChange={objField.onChange}
              />
            </div>
          );
        })}
      </div>
      <div className="card-mutation__buttons">
        {arrayButtons.map((but) => {
          return (
            <Button
              key={but.name}
              sx={but.sx}
              onClick={but.onClick}
              variant="outlined">
              {but.icon}
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default CardMutation;
//   //const [addCard, { data, isLoading }] = useAddCardMutation();
