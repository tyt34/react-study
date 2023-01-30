import { GraphQLClient, gql } from "graphql-request";

export const urlGraphBalance =
  "https://api-us-east-1.hygraph.com/v2/clbq9rppd17td01ukbp8l5371/master/";

export const urlGraphPlayers =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldegfjzh10l101un8ft894qn/master";

export const graphQLClient = new GraphQLClient(urlGraphPlayers);

export const queryBalance = gql`
  {
    balances {
      balance
    }
  }
`;

export const queryPlayers = gql`
  {
    players(stage: DRAFT) {
      id
      name
      about
    }
  }
`;

export const addPlayer = gql`
  mutation get($name: String!, $about: String!) {
    createPlayer(data: { name: $name, about: $about }) {
      id
      name
      about
    }
  }
`;
