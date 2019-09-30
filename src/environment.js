/* eslint-disable no-undef */
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import Cookies from 'js-cookie';

import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';

const oneMinute = 60 * 1000;
const cache = new RelayQueryResponseCache({ size: 250, ttl: oneMinute });

function fetchQuery(operation, variables, cacheConfig) {
  const queryID = operation.text;
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const forceFetch = cacheConfig && cacheConfig.force;

  // Try to get data from cache on queries
  const fromCache = cache.get(queryID, variables);
  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  // Get auth token
  const token = Cookies.get('authentication');

  const backendUri =
    process.env.REACT_APP_STAGE === 'production'
      ? process.env.REACT_APP_BIDMATIK_GRAPHQL_ENDPOINT_PRODUCTION
      : process.env.REACT_APP_BIDMATIK_GRAPHQL_ENDPOINT_LOCAL;

  console.log('using backend URI', backendUri);

  // Otherwise, fetch data from server
  return fetch(backendUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authentication: token || ''
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      // Update cache on queries
      if (isQuery && json) {
        cache.set(queryID, variables, json);
      }
      // Clear cache on mutations
      if (isMutation) {
        cache.clear();
      }

      return json;
    });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
