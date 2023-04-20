import React, { useEffect, useState } from 'react'
import './graph-form.scss'
import Header from '../../component/header/header'
import { Button, TextField } from '@mui/material'
import { request } from 'graphql-request'
//import { useMutation } from "@apollo/client";
import BadgeIcon from '@mui/icons-material/Badge'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import {
  addPlayer,
  changePlayer,
  delPlayer,
  graphQLClient,
  queryPlayers,
  urlGraphPlayers
} from '../../api/graph/graph'
//import { CHANGE_PL } from "../../api/graph/appollo";

type IPlayer = {
  id: string
  name: string
  about: string
}

const GraphForm = () => {
  const [players, setPlayers] = useState([])
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [id, setId] = useState('')

  /**
   * apollo
   */
  //const [mutateFunction, { data, loading, error }] = useMutation(CHANGE_PL);

  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value)
  }

  const handleChangeAbout = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAbout(event.target.value)
  }

  const fetchProducts = async () => {
    const data: any = await request(urlGraphPlayers, queryPlayers)

    setPlayers(data.players)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleClickPlayer = (player: IPlayer) => {
    setAbout(player.about)
    setName(player.name)
    setId(player.id)
  }

  const handleClickDelete = () => {
    const variables = {
      id
    }
    const delData = async () => {
      const createData = await graphQLClient.request(
        delPlayer,
        variables
      )
      console.log(JSON.stringify(createData, undefined, 2))
      fetchProducts()
    }
    delData()
  }

  const handleClickCreate = () => {
    if (id === '') {
      const addData = async () => {
        const variables = {
          name,
          about
        }

        const createData = await graphQLClient.request(
          addPlayer,
          variables
        )
        console.log(JSON.stringify(createData, undefined, 2))
        fetchProducts()
      }
      addData()
    } else {
      const variables = {
        id,
        name,
        about
      }
      /**
       * с помощью apollo
       */
      //mutateFunction({ variables });

      /**
       * с помощью graphql-request
       */
      const changeData = async () => {
        const createData = await graphQLClient.request(
          changePlayer,
          variables
        )
        console.log(JSON.stringify(createData, undefined, 2))
        fetchProducts()
      }
      changeData()
    }

    setAbout('')
    setName('')
    setId('')
  }

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
                width: '60px',
                height: '60px',
                marginRight: '30px'
              }}
              onClick={() => {
                handleClickCreate()
              }}
              variant="outlined"
            >
              <BadgeIcon />
            </Button>

            <Button
              sx={{
                width: '60px',
                height: '60px'
              }}
              onClick={() => {
                handleClickDelete()
              }}
              variant="outlined"
            >
              <DeleteForeverIcon />
            </Button>
          </div>
        </div>

        <div className="graph-form__data">
          <p className="graph-form__text">Data:</p>
          {players.map((p: IPlayer) => {
            return (
              <div
                key={p.id}
                className="graph-form__player"
                onClick={() => {
                  handleClickPlayer(p)
                }}
              >
                {p.name} - {p.about}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default GraphForm
