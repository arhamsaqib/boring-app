import {ProjectDetails, ProjectDetailsAction} from '../types/ProjectDetails';
import {ProjectActionType} from '../types/ProjectDetails';
const initialState: ProjectDetails[] = [];

export const projectDetailsReducer = (
  state = initialState,
  action: ProjectDetailsAction,
) => {
  //console.log('in reducer projeectdetails', action.type);
  switch (action.type) {
    case ProjectActionType.add: {
      return [...state, action.project];
    }
    case ProjectActionType.remove: {
      const newState = state.slice();
      newState.splice(action.index ?? -1, 1);
      return newState;
    }
    case ProjectActionType.update: {
      const newState = state.slice();
      newState[action.index!] = action.project!;
      return newState;
    }
    default:
      return state;
  }
};
