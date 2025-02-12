import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./index.css";
import App from "./App.tsx";

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql', 
  cache: new InMemoryCache()
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
