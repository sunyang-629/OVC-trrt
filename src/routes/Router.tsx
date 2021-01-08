import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Users from '../views/Users'

const Routes: React.FunctionComponent<{}> = () => {
  return (
    <Switch>
      <Route exact path="/users" component={Users} />
      <Route exact path="/"><Redirect to="/users" /></Route>
    </Switch>
  )
}

export default Routes;