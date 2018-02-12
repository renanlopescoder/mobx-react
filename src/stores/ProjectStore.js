import { types } from "mobx-state-tree";

import Project from './models/Project';
import ProjectActions from './actions/ProjectActions';

const ProjectStore = types.model('ProjectStore', {
  loading: types.maybe(types.boolean),
  projects: types.map(Project)
})
.actions(ProjectActions);

export default ProjectStore;
