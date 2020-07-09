import {RemarkDetails, RemarkDetailsAction} from '../types/RemarkDetails';
import {RemarkActionType} from '../types/RemarkDetails';
const initialState: RemarkDetails[] = [];

export const remarkDetailsReducer = (
  state = initialState,
  action: RemarkDetailsAction,
) => {
  // console.log('in reducer Remark details', action.type);
  switch (action.type) {
    case RemarkActionType.add: {
      return [...state, action.project];
    }
    case RemarkActionType.remove: {
      const newState = state.slice();
      newState.splice(action.index ?? -1, 1);
      return newState;
    }
    case RemarkActionType.update: {
      const newState = state.slice();
      newState[action.index!] = action.project!;
      return newState;
    }
    default:
      return state;
  }
};
