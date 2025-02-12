import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    countries {
      name
    }
  }
`;

export const GET_POKEMON = gql`
query {
  pokemon_v2_pokemon(limit: 10) {
    id
    name
    height
  }
}
`;
