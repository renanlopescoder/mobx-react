import { flow } from 'mobx-state-tree';

import { ErrorTracker } from '../../helpers';
import {
  fetchProjectListRequest,
  createProjectRequest,
  updateProjectRequest,
  deleteProjectRequest,
} from '../../requests';
import Project from '../models/Project'

/* eslint-disable no-param-reassign */
const ProjectActions =(self) => {

  const fetchProjectList = flow(
    function* fetchProjectList() {
      self.loading = true;
      try {
        const projects = yield fetchProjectListRequest();
        projects.map(project => self.projects.put(project))
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
      yield createProjectRequest(projectModel);
    } catch (error) {
      ErrorTracker.error(error);
    };
  });

  const updateProject = flow(function* updateProject(project) {
    try {
      const projectModel = Project.create(project);
      yield updateProjectRequest(projectModel);
    } catch (error) {
      ErrorTracker.error(error);
    };
  });

  const deleteProject = flow(function* updateProject(id) {
    try {
      deleteProjectRequest(id);
      self.projects.delete(id);
    } catch (error) {
      ErrorTracker.error(error);
    };
  });

  return { fetchProjectList, createProject, updateProject, deleteProject };
};

export default ProjectActions;
