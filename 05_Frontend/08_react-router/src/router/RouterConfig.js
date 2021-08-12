import { Route, Switch } from "react-router-dom";
import { About, Home, Users } from '../pages';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users', component: Users }
]

function RouterConfig() {
  return (
    <Switch>
      {
        routes.map((route, i) => (
          <Route exact key={i} {...route} />
        ))
      }
    </Switch>
  );
}

export default RouterConfig;
