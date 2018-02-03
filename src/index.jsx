import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './main/App';
import registerServiceWorker from './registerServiceWorker';
import ProjectStore from './stores/ProjectStore';

const projectStore = ProjectStore.create();

ReactDOM.render(
  <Provider projectStore={projectStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
