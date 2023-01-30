/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./graph-apollo.scss";
import Header from "../../component/header/header";
import { Button, TextField } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";

import BadgeIcon from "@mui/icons-material/Badge";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import {
  GET_PLAYERS,
  ADD_PLAYER,
  CHANGE_PLAYER,
  DELETE_PLAYER,
} from "../../api/graph/appollo";

type IPlayer = {
  id: string;
  name: string;
  about: string;
};

const GraphApollo = () => {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [id, setId] = useState("");

  const { loading: getLoading, data: getData } = useQuery(GET_PLAYERS);

  const [addFunction, { data: addData }] = useMutation(ADD_PLAYER);

  const [changeFunction] = useMutation(CHANGE_PLAYER);

  const [deleteFunction, { data: deleteData }] = useMutation(DELETE_PLAYER);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeAbout = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAbout(event.target.value);
  };

  useEffect(() => {
    if (addData) {
      setPlayers((prevState) => [
        ...prevState,
        {
          id: addData.createPlayer.id,
          name: addData.createPlayer.name,
          about: addData.createPlayer.about,
        },
      ]);
    }
  }, [addData]);

  useEffect(() => {
    if (deleteData) {
      let deleteArr = players.filter(
        (p) => p.id !== deleteData.deletePlayer.id
      );
      setPlayers(() => [...deleteArr]);
    }
  }, [deleteData]);

  useEffect(() => {
    if (getData) {
      setPlayers(getData.players);
    }
  }, [getData]);

  const handleClickPlayer = (player: IPlayer) => {
    setAbout(player.about);
    setName(player.name);
    setId(player.id);
  };

  const handleClickDelete = () => {
    console.log(" Button delete: ", name, about, id);
    const variables = {
      id,
    };
    deleteFunction({ variables });
  };

  const handleClickCreate = () => {
    const variables = {
      id,
      name,
      about,
    };

    if (id === "") {
      addFunction({ variables });
    } else {
      changeFunction({ variables });
    }

    setAbout("");
    setName("");
    setId("");
  };

  return (
    <>
      <Header />
      <section className="graph-form">
        <div className="graph-form__inputs">
          <div className="graph-form__input">
            <TextField
              className="graph-form__input"
              size="small"
              id="outlined-basic"
              label="Input name"
              variant="outlined"
              value={name}
              onChange={handleChangeName}
            />
          </div>

          <div className="graph-form__input">
            <TextField
              className="graph-form__input"
              size="small"
              id="outlined-basic"
              label="Input about"
              variant="outlined"
              value={about}
              onChange={handleChangeAbout}
            />
          </div>

          <div className="graph__buttons">
            <Button
              sx={{
                width: "60px",
                height: "60px",
                marginRight: "30px",
              }}
              onClick={() => {
                handleClickCreate();
              }}
              variant="outlined">
              <BadgeIcon />
            </Button>

            <Button
              sx={{
                width: "60px",
                height: "60px",
              }}
              onClick={() => {
                handleClickDelete();
              }}
              variant="outlined">
              <DeleteForeverIcon />
            </Button>
          </div>
        </div>

        <div className="graph-form__data">
          <p className="graph-form__text">Data:</p>
          {!getLoading
            ? players.map((p: IPlayer) => {
                return (
                  <div
                    key={p.id}
                    className="graph-form__player"
                    onClick={() => {
                      handleClickPlayer(p);
                    }}>
                    {p.name} - {p.about}
                  </div>
                );
              })
            : null}
        </div>
      </section>
    </>
  );
};

export default GraphApollo;
