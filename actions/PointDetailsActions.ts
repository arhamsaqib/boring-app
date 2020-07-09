import {PointDetails, PointDetailsAction} from '../types/PointDetails';
import {PointActionType} from '../types/PointDetails';

export const addProject = (project: PointDetails): PointDetailsAction => {
  return {
    project,
    type: PointActionType.add,
  };
};

export const removeProject = (index: number): PointDetailsAction => {
  //console.log('in action');
  return {
    index,
    type: PointActionType.remove,
  };
};

export const updateProject = (
  index: number,
  project: PointDetails,
): PointDetailsAction => {
  return {
    project,
    index,
    type: PointActionType.update,
  };
};
