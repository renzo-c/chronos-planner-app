import React from 'react';
import ReactDOM from 'react-dom';
import 'cross-fetch/polyfill';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import App from './components/App/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import './styles/index.css';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
});

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  // uri: 'http://localhost:4005/',
  uri: 'https://chronos-planner-server.herokuapp.com/',
});

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </FirebaseContext.Provider>,
  document.getElementById('app')
);

// Use only in dev environment or change dependency hot loader and add webpack conf in prod
// module.hot.accept();
