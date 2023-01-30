import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../component/header/header";
import "./graph-form.scss";
import BadgeIcon from "@mui/icons-material/Badge";
import { request } from "graphql-request";
import { useMutation } from "@apollo/client";

import {
  addPlayer,
  graphQLClient,
  queryPlayers,
  urlGraphPlayers,
} from "../../api/graph/graph";
import { CHANGE_PL } from "../../api/graph/appollo";

type IPlayer = {
  id: string;
  name: string;
  about: string;
};

const GraphForm = () => {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [id, setId] = useState("");

  const [mutateFunction, { data, loading, error }] = useMutation(CHANGE_PL);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeAbout = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAbout(event.target.value);
  };

  const fetchProducts = async () => {
    const data = await request(urlGraphPlayers, queryPlayers);

    console.log("P Data: ", data);
    setPlayers(data.players);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClickPlayer = (player: IPlayer) => {
    console.log(" -> ", player);
    setAbout(player.about);
    setName(player.name);
    setId(player.id);
  };

  const handleClickButton = () => {
    console.log(" Button input: ", name, about, id);

    if (id === "") {
      const addData = async () => {
        const variables = {
          name,
          about,
        };

        const createData = await graphQLClient.request(addPlayer, variables);
        console.log(JSON.stringify(createData, undefined, 2));
        fetchProducts();
      };
      addData();
    } else {
      const variables = {
        id,
        name,
        about,
      };
      /**
       * с помощью apollo
       */
      //mutateFunction({ variables });
      /**
       * с помощью graphql-request
       */
      const changeData = async () => {
        const createData = await graphQLClient.request(CHANGE_PL, variables);
        console.log(JSON.stringify(createData, undefined, 2));
        fetchProducts();
      };
      changeData();
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
          <Button
            sx={{
              width: "60px",
              height: "60px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={() => {
              handleClickButton();
            }}
            variant="outlined">
            <BadgeIcon />
          </Button>
        </div>
        <div className="graph-form__data">
          <p className="graph-form__text">Data:</p>
          {players.map((p: IPlayer) => {
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
          })}
        </div>
      </section>
    </>
  );
};

export default GraphForm;
