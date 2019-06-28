// import 'cross-fetch/polyfill';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';

// const cache = new InMemoryCache();
// const link = new HttpLink({
//     uri: "https://chronos-planner-server.herokuapp.com/"
// });

// const client = new ApolloClient({
//     cache,
//     link
// });

// import gql from 'graphql-tag';

// client
// .query({
//     query: gql`
//       query employees {
//         employees {
//             id
//             firstName
//             user
//             createdAt
//             deletedAt
//         }
//       }
//     `
//   })
//   .then(result => console.log(result.data.employees));

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React with Webpack and Babel';


ReactDOM.render(
  (
  <div>
  <div>{title}</div>
  <h1>This should not refresh</h1>
  </div>
  ),
  document.getElementById("app")
);

module.hot.accept();