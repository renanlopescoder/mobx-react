import { types } from "mobx-state-tree";

import Project from './models/Project';
import ProjectActions from './actions/ProjectActions';
import ProjectViews from './views/ProjectViews';

const ProjectStore = types.model('ProjectStore', {
  loading: types.maybe(types.boolean),
  projects: types.map(Project),
})
.views(ProjectViews)
.actions(ProjectActions);


export default ProjectStore;
