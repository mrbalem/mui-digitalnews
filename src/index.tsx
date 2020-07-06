/**
 *  @version 1.0.0
 *  @author Rony cb - @Mrvalem
 *  @description Punto de Entrada de React
 * 	@process 1
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
/**
 * config apollo tools
 * removing if no use for proyect
 */
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

//capture error for consult graphql
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    //[*] capture error for grap existen en query, mutation or suscription
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message ${message}, location: ${locations}, Path: ${path}`
      )
    );

    //[*] capture error for netword
    if (networkError) console.log(`[*]NetWork error : ${networkError}`);
  }
});

//[*] link server graphql
const link = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
});

//[*] cache for data graphql
const cache = new InMemoryCache();

//[*] config client apollo client.
const client = new ApolloClient({
  link: HttpLink.from([errorLink, link]),
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
