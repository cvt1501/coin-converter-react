import { gql } from "@apollo/client";

export const PRICE_QUERY = gql`
  query market($marketSymbol: String!) {
    market(marketSymbol: $marketSymbol) {
      id
      marketType
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
