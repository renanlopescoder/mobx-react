import { clientHttp, ErrorTracker } from '../helpers';

const fetchProjectListRequest = () =>
  clientHttp.get(`/list/projects`).then(response => response.data)

  const createProjectRequest = (project) =>
  clientHttp.post(`/create/project`, project).then(response => response.data)

export {
  fetchProjectListRequest,
  createProjectRequest,
};
