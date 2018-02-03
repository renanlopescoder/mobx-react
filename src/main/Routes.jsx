import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from '../components';
import { ProjectList, ProjectForm } from '../views';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Login = () => (
  <div>
    <h2>Project Login Screen</h2>
  </div>
);

const Logout = () => (
  <div>
    <h2>Project Logout Screen</h2>
  </div>
);

const withAppBar = jsxComponent => (
  <div>
    <Navbar title="Mobx React" />
    {jsxComponent}
  </div>
);

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={props => <Login {...props} />} />
    <Route exact path="/logout" component={props => <Logout {...props} />} />
    <Route exact path="/"
      component={props => withAppBar(<Home {...props} />)}
    />
    <Route exact path="/projects"
      component={props => withAppBar(<ProjectList {...props} />)}
    />
    <Route exact path="/projects/new"
      component={props => withAppBar(<ProjectForm {...props} />)}
    />
  </Switch>
);

export default Routes;
