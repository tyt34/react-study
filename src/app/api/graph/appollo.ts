import { gql } from "@apollo/client";

export const CHANGE_PL = gql`
  mutation UpdatePlayer($id: ID!, $name: String!, $about: String!) {
    updatePlayer(where: { id: $id }, data: { name: $name, about: $about }) {
      id
      name
      about
    }
  }
`;
