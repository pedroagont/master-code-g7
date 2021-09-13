import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components';
import { Home, About, Users } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
