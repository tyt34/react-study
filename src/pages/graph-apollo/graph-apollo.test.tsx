import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { GET_PLAYERS } from '../../api'
import { GraphData } from './components'

const mocksGet = {
  request: {
    query: GET_PLAYERS
  },
  result: {
    data: {
      players: [{ id: '1', name: 'Egor', about: 'Penkin' }]
    }
  }
}

it('Render  nothing', async () => {
  const mocksNone: any = []

  render(
    <MockedProvider
      mocks={mocksNone}
      addTypename={false}
    >
      <GraphData />
    </MockedProvider>
  )
  expect(await screen.findByText('Data:')).toBeInTheDocument()
})

it('Get player', async () => {
  const { name: nameMock, about: aboutMock } =
    mocksGet.result.data.players[0]

  render(
    <MockedProvider
      mocks={[mocksGet]}
      addTypename={false}
    >
      <GraphData />
    </MockedProvider>
  )
  expect(await screen.findByText('Data:')).toBeInTheDocument()
  expect(
    await screen.findByText(`${nameMock} - ${aboutMock}`)
  ).toBeInTheDocument()
})

it('Delete player', async () => {
  const { name: nameMock, about: aboutMock } =
    mocksGet.result.data.players[0]

  const { container } = render(
    <MockedProvider
      mocks={[mocksGet]}
      addTypename={false}
    >
      <GraphData />
    </MockedProvider>
  )

  expect(await screen.findByText('Data:')).toBeInTheDocument()
  expect(
    await screen.findByText(`${nameMock} - ${aboutMock}`)
  ).toBeInTheDocument()

  const button = container.querySelector('#button-delete')
  const firstData = container.querySelector('.graph-form__player')

  fireEvent.click(firstData!)
  await fireEvent.click(button!)
  // expect(
  //   await screen.findByText(`${nameMock} - ${aboutMock}`)
  // ).toBeInTheDocument();
})
