import {RemarkDetails, RemarkDetailsAction} from '../types/RemarkDetails';
import {RemarkActionType} from '../types/RemarkDetails';

export const addProject = (project: RemarkDetails): RemarkDetailsAction => {
  return {
    project,
    type: RemarkActionType.add,
  };
};

export const removeProject = (index: number): RemarkDetailsAction => {
  //console.log('in action');
  return {
    index,
    type: RemarkActionType.remove,
  };
};

export const updateProject = (
  index: number,
  project: RemarkDetails,
): RemarkDetailsAction => {
  return {
    project,
    index,
    type: RemarkActionType.update,
  };
};
