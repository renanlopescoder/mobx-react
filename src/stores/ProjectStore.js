import { types } from "mobx-state-tree";

import Project from './models/Project';
import ProjectActions from './actions/ProjectActions';

const ProjectStore = types.model('ProjectStore', {
  loading: types.maybe(types.boolean),
  projects: types.optional(types.array(Project), []),
  project: types.maybe(types.reference(Project)),
})
.actions(ProjectActions);

export default ProjectStore;
