import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { constants } from "../utils/constants";

const httpLink = createHttpLink({
  uri: constants.GRAPHQL_ENDPOINT || "https://api.blocktap.io/graphql",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
