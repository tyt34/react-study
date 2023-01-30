import { gql } from "@apollo/client";

export const GET_PLAYERS = gql`
  {
    players(stage: DRAFT) {
      id
      name
      about
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation get($name: String!, $about: String!) {
    createPlayer(data: { name: $name, about: $about }) {
      id
      name
      about
    }
  }
`;

export const DELETE_PLAYER = gql`
  mutation delete($id: ID!) {
    deletePlayer(where: { id: $id }) {
      id
    }
  }
`;

export const CHANGE_PLAYER = gql`
  mutation UpdatePlayer($id: ID!, $name: String!, $about: String!) {
    updatePlayer(where: { id: $id }, data: { name: $name, about: $about }) {
      id
      name
      about
    }
  }
`;
