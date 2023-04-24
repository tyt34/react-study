import { Button } from '@mui/material'
import React from 'react'
import { useAppDispatch, useOrder } from '../../../../store/hooks'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { changeAmountOrder } from '../../books.slice'
import './order.scss'
import { IOrder } from '../../books.slice'

const Order = () => {
  const orderArr = useOrder()
  const dispatch = useAppDispatch()
  return (
    <>
      {orderArr.length !== 0 ? (
        <section className="order">
          <h2>Order:</h2>
          {orderArr.map((orderBook: IOrder) => {
            return (
              <div
                key={orderBook.name}
                className="order__book"
              >
                <p className="text">
                  <span className="bold">Name:</span> {orderBook.name}
                </p>
                <p className="text">
                  <span className="bold">Autor:</span>{' '}
                  {orderBook.author}
                </p>
                <p className="text">
                  <span className="bold">Cost:</span>{' '}
                  {orderBook.cost / 100}$
                </p>
                <p className="text">
                  <span className="bold">Amount:</span>
                  {orderBook.amount}{' '}
                </p>
                <p className="text">
                  <span className="bold">Full cost:</span>{' '}
                  {(orderBook.cost / 100) * orderBook.amount}$
                </p>
                <div className="order__buttons">
                  <Button
                    onClick={() => {
                      dispatch(
                        changeAmountOrder({
                          ...orderBook,
                          forward: 'plus'
                        })
                      )
                    }}
                    variant="outlined"
                  >
                    <ArrowCircleUpIcon />
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(
                        changeAmountOrder({
                          ...orderBook,
                          forward: 'minus'
                        })
                      )
                    }}
                    variant="outlined"
                  >
                    <ArrowCircleDownIcon />
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(
                        changeAmountOrder({
                          ...orderBook,
                          forward: 'delete'
                        })
                      )
                    }}
                    variant="contained"
                  >
                    <DeleteForeverIcon />
                  </Button>
                </div>
              </div>
            )
          })}
        </section>
      ) : null}
    </>
  )
}

export default Order
