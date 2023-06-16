import React, { useEffect, useState } from 'react'
import BadgeIcon from '@mui/icons-material/Badge'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Button, TextField } from '@mui/material'
import { useMutation, useQuery } from '@apollo/client'
import {
  ADD_PLAYER,
  CHANGE_PLAYER,
  DELETE_PLAYER,
  GET_PLAYERS
} from '../../../../api'

import styles from './graph-data.module.scss'

export type IPlayer = {
  id: string
  name: string
  about: string
}

export const GraphData = () => {
  const [players, setPlayers] = useState<IPlayer[]>([])
  const [form, setForm] = useState<IPlayer>({
    name: '',
    about: '',
    id: ''
  })

  const { loading: isLoad, data: getData } = useQuery(GET_PLAYERS)

  const [addFunction, { data: addData }] = useMutation(ADD_PLAYER)

  const [changeFunction] = useMutation(CHANGE_PLAYER)

  const [deleteFunction, { data: deleteData }] =
    useMutation(DELETE_PLAYER)

  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prevState) => ({
      ...prevState,
      name: event.target.value
    }))
  }

  const handleChangeAbout = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prevState) => ({
      ...prevState,
      about: event.target.value
    }))
  }

  useEffect(() => {
    if (addData) {
      setPlayers((prevState) => [
        ...prevState,
        {
          id: addData.createPlayer.id,
          name: addData.createPlayer.name,
          about: addData.createPlayer.about
        }
      ])
    }
  }, [addData])

  useEffect(() => {
    if (deleteData) {
      const deleteArr = players.filter(
        (p) => p.id !== deleteData.deletePlayer.id
      )
      setPlayers([...deleteArr])
    }
  }, [deleteData])

  useEffect(() => {
    if (getData) {
      setPlayers(getData.players)
    }
  }, [getData])

  const handleClickPlayer = (player: IPlayer) => {
    setForm({
      name: player.name,
      about: player.about,
      id: player.id
    })
  }

  const handleClickDelete = () => {
    const variables = form
    if (form.id) {
      deleteFunction({ variables })

      setForm({
        name: '',
        about: '',
        id: ''
      })
    }
  }

  const handleClickCreate = () => {
    const variables = form

    if (form.id === '') {
      addFunction({ variables })
    } else {
      changeFunction({ variables })
    }

    setForm({
      name: '',
      about: '',
      id: ''
    })
  }

  /**
   * замапить текст фид
   */
  return (
    <>
      <section className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <TextField
              className={styles.input}
              size="small"
              id="outlined-basic"
              label="Input name"
              variant="outlined"
              value={form.name}
              onChange={handleChangeName}
            />
          </div>

          <div className={styles.input}>
            <TextField
              className={styles.input}
              size="small"
              id="outlined-basic"
              label="Input about"
              variant="outlined"
              value={form.about}
              onChange={handleChangeAbout}
            />
          </div>

          <div>
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
              id="button-delete"
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

        <div>
          <p>Data:</p>
          {!isLoad
            ? players.map((p: IPlayer) => {
                return (
                  <div
                    key={p.id}
                    className={styles.player}
                    onClick={() => {
                      handleClickPlayer(p)
                    }}
                  >
                    {p.name} - {p.about}
                  </div>
                )
              })
            : null}
        </div>
      </section>
    </>
  )
}
