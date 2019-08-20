import React from 'react';
import { branch, renderComponent } from 'recompose';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const RedirectToAuth = () => <Redirect to="/authentication" />;

//  redirect to authentication page if no auth token exists
export default branch(
  () => {
    const authToken = Cookies.get('authentication');
    console.log('authToken', authToken);
    // TODO: also redirect if token is stale

    const authTokenMissing = authToken === undefined;
    console.log('authTokenMissing', authTokenMissing);
    return authTokenMissing;
  },
  renderComponent(RedirectToAuth),
);
