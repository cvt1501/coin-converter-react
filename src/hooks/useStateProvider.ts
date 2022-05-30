import { useContext } from "react";
import { StoreStateProvider } from "../context/StateContextProvider";

export const useStateContext = () => {
  return useContext(StoreStateProvider);
};
