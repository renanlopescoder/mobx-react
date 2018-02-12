import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from '../components';
import { ProjectList, ProjectForm, Login, UserList, UserForm } from '../views';

const Home = () => (
  <div>
    <h2>Home</h2>
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
    <Route exact path="/" component={props => <Login {...props} />} />
    <Route exact path="/logout" component={props => <Logout {...props} />} />
    <Route exact path="/home"
      component={props => withAppBar(<Home {...props} />)}
    />
    <Route exact path="/projects"
      component={props => withAppBar(<ProjectList {...props} />)}
    />
    <Route exact path="/project/form"
      component={props => withAppBar(<ProjectForm {...props} />)}
    />
    <Route exact path="/project/form/:id"
      component={props => withAppBar(<ProjectForm {...props} />)}
    />
    <Route exact path="/users"
      component={props => withAppBar(<UserList {...props} />)}
    />
    <Route exact path="/user/form"
      component={props => withAppBar(<UserForm {...props} />)}
    />
  </Switch>
);

export default Routes;
