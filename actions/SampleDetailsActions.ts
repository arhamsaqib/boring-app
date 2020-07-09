import {SampleDetails, SampleDetailsAction} from '../types/SampleDetails';
import {SampleActionType} from '../types/SampleDetails';

export const addProject = (project: SampleDetails): SampleDetailsAction => {
  return {
    project,
    type: SampleActionType.add,
  };
};

export const removeProject = (index: number): SampleDetailsAction => {
  //console.log('in action');
  return {
    index,
    type: SampleActionType.remove,
  };
};

export const updateProject = (
  index: number,
  project: SampleDetails,
): SampleDetailsAction => {
  return {
    project,
    index,
    type: SampleActionType.update,
  };
};
