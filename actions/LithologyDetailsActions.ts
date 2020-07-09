import {
  LithologyDetails,
  LithologyDetailsAction,
} from '../types/LithologyDetails';
import {LithologyActionType} from '../types/LithologyDetails';

export const addProject = (
  project: LithologyDetails,
): LithologyDetailsAction => {
  return {
    project,
    type: LithologyActionType.add,
  };
};

export const removeProject = (index: number): LithologyDetailsAction => {
  //console.log('in action');
  return {
    index,
    type: LithologyActionType.remove,
  };
};

export const updateProject = (
  index: number,
  project: LithologyDetails,
): LithologyDetailsAction => {
  return {
    project,
    index,
    type: LithologyActionType.update,
  };
};
