import { clientHttp, apiPaths } from '../services'
import { ErrorTracker } from '../helpers';

const fetchProjectListRequest = () =>
  clientHttp.get(apiPaths.projects.list).then(response => response.data)

const createProjectRequest = project =>
  clientHttp.post(apiPaths.projects.create, project).then(response => response.data)

const updateProjectRequest = project =>
  clientHttp.put(`${apiPaths.projects.update}/${project._id}`, project).then(response => response.data)

const deleteProjectRequest = id =>
  clientHttp.delete(`${apiPaths.projects.delete}/${id}`).then(response => response.data)


export {
  fetchProjectListRequest,
  createProjectRequest,
  updateProjectRequest,
  deleteProjectRequest,
};
