import { types } from 'mobx-state-tree';

const ProjectModel = types.model(
  'ProjectModel',
  {
    _id: types.maybe(types.string),
    author: types.string,
    demoLink: types.string,
    description: types.string,
    authorLink: types.string,
    githubLink: types.string,
    project: types.string,
    status: types.string,
    technologies: types.string,
  },
);

export default ProjectModel;
