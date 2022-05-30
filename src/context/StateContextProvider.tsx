import { FC, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { client } from "../client/blockTap.io";
import { PRICE_QUERY } from "../client/graphql/price";
import { Market } from "../typings/market";

interface StoreStateProviderProps {
  children: React.ReactElement;
}

export interface IStoreStateProvider {
  markets: Market[];
  addMarket: (query: string) => void;
  removeMarket: (id: string) => void;
  isLoading: boolean;
}

export const StoreStateProvider = createContext<IStoreStateProvider>({
  markets: [],
  addMarket: () => null,
  removeMarket: () => null,
  isLoading: false,
});

const MARKET_LOCALSTORAGE_KEY = "market";

export const StoreState: FC<StoreStateProviderProps> = ({ children }) => {
  const [markets, setMarkets] = useState<Market[]>(() => {
    const localStorageMarkets = localStorage.getItem(MARKET_LOCALSTORAGE_KEY);

    if (localStorageMarkets) {
      return JSON.parse(localStorageMarkets);
    }

    return [];
  });
  const [isLoading, setLoading] = useState<boolean>(false);

  const addMarket = (query: string): void => {
    query = query.toUpperCase();
    if (
      markets.find((item) => item.id === `binance_${query.toLowerCase()}_eur`)
    ) {
      toast(`${query} already added`);
      return;
    }

    setLoading(true);

    const marketSymbol = `Binance:${query.toUpperCase()}/EUR`;

    client
      .query<{ market: Market }, { marketSymbol: string }>({
        query: PRICE_QUERY,
        variables: {
          marketSymbol,
        },
      })
      .then(({data}): void => {
        if (data.market) {
          setMarkets((prevState) => {
            const newState = [...prevState, data.market];
            localStorage.setItem(
              MARKET_LOCALSTORAGE_KEY,
              JSON.stringify(newState)
            );
            toast(`${query} added`);
            return newState;
          });
        } else {
          toast(`${query}: not found!`);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const removeMarket = (id: string): void => {
    const newMarkets = markets.filter((market) => market.id !== id);
    toast(
      `${(id.includes("_") ? id.split("_")[1] : id).toUpperCase()} removed`
    );
    localStorage.setItem(MARKET_LOCALSTORAGE_KEY, JSON.stringify(newMarkets));
    setMarkets(newMarkets);
  };

  return (
    <StoreStateProvider.Provider
      value={{
        markets,
        removeMarket,
        isLoading,
        addMarket,
      }}
    >
      {children}
    </StoreStateProvider.Provider>
  );
};
