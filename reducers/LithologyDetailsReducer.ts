import {
  LithologyDetails,
  LithologyDetailsAction,
} from '../types/LithologyDetails';
import {LithologyActionType} from '../types/LithologyDetails';
const initialState: LithologyDetails[] = [];

export const lithologyDetailsReducer = (
  state = initialState,
  action: LithologyDetailsAction,
) => {
  //console.log('in reducer Lithology details', action.type);
  switch (action.type) {
    case LithologyActionType.add: {
      return [...state, action.project];
    }
    case LithologyActionType.remove: {
      const newState = state.slice();
      newState.splice(action.index ?? -1, 1);
      return newState;
    }
    case LithologyActionType.update: {
      const newState = state.slice();
      newState[action.index!] = action.project!;
      return newState;
    }
    default:
      return state;
  }
};
