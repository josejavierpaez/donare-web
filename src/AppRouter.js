import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CommingSoon } from './pages/CommingSoon';
import { AboutPage } from './pages/AboutPage';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
export const AppRouter = () => {
  return (
    <Router> 
      
      <NavBar/>
      <Switch>
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/' component={CommingSoon} />
        <Route exact path='*' component={CommingSoon} />
      </Switch>
      <Footer/>
    </Router>
  );
};
