import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './main/App';
import registerServiceWorker from './registerServiceWorker';
import {
  ProjectStore,
  UserStore,
} from './stores';

const projectStore = ProjectStore.create({ projects: {} });
const userStore = UserStore.create({ users: {} });

ReactDOM.render(
  <Provider projectStore={projectStore} userStore={userStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
