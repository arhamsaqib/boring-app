import {ReduxProjectAction} from './../types/actions';
import {Project} from './../entities';
import {ProjectAction} from '../types';

const INITAL_STATE: Project[] = [];

export const projectReducer = (
  state = INITAL_STATE,
  action: ReduxProjectAction,
) => {
  switch (action.type) {
    case ProjectAction.add: {
      return [...state, action.project];
    }
    case ProjectAction.update: {
      const newState = state.slice();
      newState[action.index!] = action.project!;
      return newState;
    }
    case ProjectAction.remove: {
      const newState = state.slice();
      newState.splice(action.index ?? -1, 1);
      return newState;
    }
    default:
      return state;
  }
};
