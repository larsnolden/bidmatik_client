import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RedirectUnauthenticated from 'components/RedirectUnauthenticated';
import Overview from './app/overview/Overview';
import Campaign from './app/campaign/Campaign';
import Authenticate from './app/authenticate/Authenticate';

const RouteProtected = RedirectUnauthenticated(Route);

export default () => (
  <Switch>
    <RouteProtected exact path="/" component={Overview} />
    <RouteProtected path="/campaign/:campaignId" component={Campaign} />
    <Route path="/authenticate" component={Authenticate} />
    <Redirect to="authenticate" />
  </Switch>
);
