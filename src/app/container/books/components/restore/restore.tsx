import React from 'react'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { changeAmountOrder } from '../../books.slice'
import { useAppDispatch, useBooks } from '../../../../store/hooks'

import './restore.scss'

const Restore = () => {
  const booksArr = useBooks()
  const dispatch = useAppDispatch()

  return (
    <>
      <section className="restore">
        <h3> Restore:</h3>

        {booksArr.map((book) => {
          return (
            <div key={book.name} className="book">
              <div className="book__text">
                <p className="text">
                  {' '}
                  <span className="bold">Name:</span> {book.name}
                </p>
                <p className="text">
                  {' '}
                  <span className="bold">Autor:</span> {book.author}
                </p>
                <p className="cost text">
                  <span className="bold">Cost: </span>
                  {book.cost / 100}$
                </p>
              </div>

              <Button
                onClick={() => {
                  dispatch(
                    changeAmountOrder({
                      ...book,
                      forward: 'plus'
                    })
                  )
                }}
                variant="contained"
                key={book.name}
              >
                <ShoppingCartIcon />
              </Button>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Restore
