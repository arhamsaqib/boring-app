import {Project} from '../../entities';
import {ReduxProjectAction, ProjectAction} from '../../types';

export const addProject = (project: Project): ReduxProjectAction => {
  return {
    project,
    type: ProjectAction.add,
  };
};

export const updateProject = (
  index: number,
  project: Project,
): ReduxProjectAction => {
  return {
    project,
    index,
    type: ProjectAction.update,
  };
};

export const removeProject = (index: number): ReduxProjectAction => {
  return {
    index,
    type: ProjectAction.remove,
  };
};
