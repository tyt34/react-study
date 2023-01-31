import { Button, TextField } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import "./card-mutation.scss";
import {
  useAddCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation,
} from "../../../../api/image-cards/image-cards";
import { getUniqueId } from "../../../../utils/utils";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "./card-mutation.slice";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import BorderColorIcon from "@mui/icons-material/BorderColor";

type Props = {
  text: string;
};

export type IFormMutation = {
  name: string;
  link: string;
  id: string;
};

export const formMutEmpty = {
  name: "",
  link: "",
  id: "",
};

const sizeButton = {
  width: "45px",
  height: "45px",
};

const form = [
  { name: "name", label: "Name" },
  { name: "link", label: "Link" },
];

const CardMutation: FC<Props> = ({ text }) => {
  const [addCard] = useAddCardMutation();
  const [delCard] = useDeleteCardMutation();
  const [changeCard] = useUpdateCardMutation();

  const formMutation = useAppSelector(
    (store: RootState) => store.formMutation.formMutation
  );

  const [formMut, setFormMut] = useState<Record<string, string>>(formMutation);

  useEffect(() => {
    setFormMut(formMutation);
  }, [formMutation]);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormMut((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClickAdd = async () => {
    if (formMut.name !== "" && formMut.link !== "") {
      await addCard({
        name: formMut.name,
        link: formMut.link,
        id: getUniqueId(2),
      }).unwrap();
    }

    setFormMut(formMutEmpty);
  };

  const handleClickDelete = () => {
    if (formMutation.id) {
      delCard(formMutation.id);
    }
    setFormMut(formMutEmpty);
  };

  const handleClickChange = () => {
    if (formMutation.id) {
      changeCard(formMut);
    }
    setFormMut(formMutEmpty);
  };

  const arrayButtons = [
    {
      name: "change",
      sx: sizeButton,
      onClick: handleClickChange,
      icon: <BorderColorIcon />,
    },
    {
      name: "add",
      sx: sizeButton,
      onClick: handleClickAdd,
      icon: <AddToQueueIcon />,
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
      {form.map((el: any) => {
        return (
          <div key={el.name} className="graph-form__input">
            <TextField
              className="graph-form__input"
              size="small"
              id="outlined-basic"
              label={el.label}
              variant="outlined"
              value={formMut[el.name]}
              name={el.name}
              onChange={handleChangeName}
            />
          </div>
        );
      })}

      <div className="card-mutation__buttons">
        {arrayButtons.map((btn) => {
          return (
            <Button
              key={btn.name}
              sx={btn.sx}
              onClick={btn.onClick}
              variant="outlined">
              {btn.icon}
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default CardMutation;
//   //const [addCard, { data, isLoading }] = useAddCardMutation();
