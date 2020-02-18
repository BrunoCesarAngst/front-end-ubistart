import React from 'react';
import { Switch, Route } from 'react-router-dom';

import outlets from './pages/outlets';
import registrationOutlet from './pages/registrationOutlet';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={outlets} />
      <Route path="/register" component={registrationOutlet} />
    </Switch>
  );
}
