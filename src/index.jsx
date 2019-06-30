import React from 'react';
import ReactDOM from 'react-dom';
import 'cross-fetch/polyfill';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import './styles/index.css';
import App from './components/App/App';
import Firebase, { FirebaseContext } from './components/Firebase';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://chronos-planner-server.herokuapp.com/',
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </FirebaseContext.Provider>,
  document.getElementById('app'),
);

// Use only in dev environment or change dependency hot loader and add webpack conf in prod
// module.hot.accept();
