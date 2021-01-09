import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Users from '../views/Users';
import Posts from '../views/Posts';

const Routes: React.FunctionComponent<{}> = () => {
  return (
    <Switch>
      <Route exact path="/users" component={Users} />
      <Route exact path="/"><Redirect to="/users" /></Route>
      <Route exact path="/users/:id/posts" component={Posts} />
    </Switch>
  )
}

export default Routes;