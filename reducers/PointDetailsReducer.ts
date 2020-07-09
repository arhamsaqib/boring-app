import {PointDetails, PointDetailsAction} from '../types/PointDetails';
import {PointActionType} from '../types/PointDetails';
const initialState: PointDetails[] = [];

export const pointDetailsReducer = (
  state = initialState,
  action: PointDetailsAction,
) => {
  // console.log('in reducer point details', action.type);
  switch (action.type) {
    case PointActionType.add: {
      return [...state, action.project];
    }
    case PointActionType.remove: {
      const newState = state.slice();
      newState.splice(action.index ?? -1, 1);
      return newState;
    }
    case PointActionType.update: {
      const newState = state.slice();
      newState[action.index!] = action.project!;
      return newState;
    }
    default:
      return state;
  }
};
