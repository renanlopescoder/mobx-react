import { clientHttp, apiPaths } from '../services'
import { ErrorTracker } from '../helpers';

const fetchProjectListRequest = () =>
  clientHttp.get(apiPaths.projects.list).then(response => response.data)

  const createProjectRequest = (project) =>
  clientHttp.post(apiPaths.projects.create, project).then(response => response.data)

export {
  fetchProjectListRequest,
  createProjectRequest,
};
