import { flow } from 'mobx-state-tree';

import { ErrorTracker } from '../../helpers';
import { fetchProjectListRequest, createProjectRequest } from '../../requests';
import Project from '../models/Project'

/* eslint-disable no-param-reassign */
const ProjectActions =(self) => {

  const fetchProjectList = flow(
    function* fetchProjectList() {
      self.loading = true;
      try {
        self.projects = yield fetchProjectListRequest();
      } catch (error) {
        ErrorTracker.error(error);
      } finally {
        self.loading = false;
      };
    }
  );

  const createProject = flow(function* createProject(project) {
    try {
      const projectModel = Project.create(project);
      self.project = yield createProjectRequest(projectModel);
      return;
    } catch (error) {
      ErrorTracker.error(error);
    };
  });

  return { fetchProjectList, createProject };
};

export default ProjectActions;
