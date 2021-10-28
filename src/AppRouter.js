import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CommingSoon } from './pages/CommingSoon';
import { AboutPage } from './pages/AboutPage';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage.jsx';
export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='*' component={CommingSoon} />
      </Switch>
      <Footer />
    </Router>
  );
};
