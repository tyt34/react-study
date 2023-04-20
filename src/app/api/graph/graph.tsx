import { GraphQLClient, gql } from 'graphql-request'

export const urlGraphPlayers =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldegfjzh10l101un8ft894qn/master'

export const graphQLClient = new GraphQLClient(urlGraphPlayers)

export const queryPlayers = gql`
  {
    players(stage: DRAFT) {
      id
      name
      about
    }
  }
`

export const addPlayer = gql`
  mutation get($name: String!, $about: String!) {
    createPlayer(data: { name: $name, about: $about }) {
      id
      name
      about
    }
  }
`

export const changePlayer = gql`
  mutation UpdatePlayer($id: ID!, $name: String!, $about: String!) {
    updatePlayer(
      where: { id: $id }
      data: { name: $name, about: $about }
    ) {
      id
      name
      about
    }
  }
`

export const delPlayer = gql`
  mutation delete($id: ID!) {
    deletePlayer(where: { id: $id }) {
      id
    }
  }
`
