import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Overview from './app/overview/Overview';

export default () => (
  <Switch>
    <Route exact path="/" component={Overview} />
  </Switch>
);
