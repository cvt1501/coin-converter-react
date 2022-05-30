import { useQuery } from "@apollo/client";
import { PRICE_QUERY } from "../client/graphql/price";
import { GraphqlMarketResponse } from "../typings/market";

export const useMarketsSymbol = () => {
  const { loading, error, data } = useQuery<GraphqlMarketResponse>(
    PRICE_QUERY,
    {
      variables: {
        marketSymbol: "Binance:BTC/EUR",
      },
    }
  );

  return {
    loading,
    error,
    data,
  };
};
