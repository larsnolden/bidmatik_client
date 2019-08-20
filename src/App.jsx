import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import Routes from './Routes';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BIDMATIK_GRAPHQL_ENDPOINT,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.warn('GrapqhQl Error: ', graphQLErrors);
  }

  if (networkError) {
    // do something with network error
    console.warn('GrapqhQl Network Error: ', networkError);
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});


function App() {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </Fragment>
  );
}

export default App;
