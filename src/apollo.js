import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "TOKEN";

export const isLoggedInVar = makeVar(false);

export const loginUser = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
