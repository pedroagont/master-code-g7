import { BrowserRouter as Router } from "react-router-dom";

import Navigation from './components';
import RouterConfig from './router';

function App() {
  return (
    <Router>
      <Navigation />
      <RouterConfig />
    </Router>
  );
}

export default App;
