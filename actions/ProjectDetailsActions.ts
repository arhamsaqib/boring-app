import {ProjectDetails, ProjectDetailsAction} from '../types/ProjectDetails';
import {ProjectActionType} from '../types/ProjectDetails';

export const addProject = (project: ProjectDetails): ProjectDetailsAction => {
  return {
    project,
    type: ProjectActionType.add,
  };
};

export const removeProject = (index: number): ProjectDetailsAction => {
  console.log('in action');
  return {
    index,
    type: ProjectActionType.remove,
  };
};

export const updateProject = (
  index: number,
  project: ProjectDetails,
): ProjectDetailsAction => {
  return {
    project,
    index,
    type: ProjectActionType.update,
  };
};
