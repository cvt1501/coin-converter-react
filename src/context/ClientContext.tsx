import { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../client/blockTap.io";

interface ClientContextProps {
  children: React.ReactElement;
}

export const ClientContextProvider: FC<ClientContextProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
