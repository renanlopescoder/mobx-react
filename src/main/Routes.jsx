import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import Navbar from '../components/molecules'
import {
  ProjectList,
  ProjectForm,
  Login,
  UserList,
  UserForm,
  Home
} from '../components/pages'
import {
  ProjectStore,
  UserStore,
} from '../stores'

const projectStore = ProjectStore.create({ projects: {} })
const userStore = UserStore.create({ users: {} })

const withAppBar = jsxComponent => (
  <div>
    <Navbar title="Mobx React" />
    {jsxComponent}
  </div>
)

const Routes = () => (
  <Switch>
    <Route exact path="/" component={props => (
      <Provider userStore={userStore}>
        <Login {...props} />
      </Provider>
    )} />
    <Route exact path="/home"
      component={props => withAppBar(<Home {...props} />)}
    />
    <Route exact path="/projects"
      component={props => withAppBar(
        <Provider projectStore={projectStore}>
          <ProjectList {...props} />
        </Provider>
      )}
    />
    <Route exact path="/project/form"
      component={props => withAppBar(
        <Provider projectStore={projectStore}>
          <ProjectForm {...props} />
        </Provider>
      )}
    />
    <Route exact path="/project/form/:id"
      component={props => withAppBar(
        <Provider projectStore={projectStore}>
          <ProjectForm {...props} />
        </Provider>
      )}
    />
    <Route exact path="/users"
      component={props => withAppBar(
        <Provider userStore={userStore}>
          <UserList {...props} />
        </Provider>
      )}
    />
    <Route exact path="/user/form"
      component={props => withAppBar(
        <Provider userStore={userStore}>
          <UserForm {...props} />
        </Provider>
      )}
    />
  </Switch>
)

export default Routes
