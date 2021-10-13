import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CommingSoon } from './pages/CommingSoon';
export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={CommingSoon} />
        <Route exact path='*' component={CommingSoon} />
      </Switch>
    </Router>
  );
};
