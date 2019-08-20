import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Overview from './app/overview/Overview';
import Campaign from './app/campaign/Campaign';
import Authenticate from './app/authenticate/Authenticate';

export default () => (
  <Switch>
    <Route exact path="/" component={Overview} />
    <Route path="/campaign/:campaignId" component={Campaign} />
    <Route path="/authenticate" component={Authenticate} />

  </Switch>
);
