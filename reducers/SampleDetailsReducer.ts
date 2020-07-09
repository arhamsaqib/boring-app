import {SampleDetails, SampleDetailsAction} from '../types/SampleDetails';
import {SampleActionType} from '../types/SampleDetails';
const initialState: SampleDetails[] = [];

export const sampleDetailsReducer = (
  state = initialState,
  action: SampleDetailsAction,
) => {
  //console.log('in reducer Sample details', action.type);
  switch (action.type) {
    case SampleActionType.add: {
      return [...state, action.project];
    }
    case SampleActionType.remove: {
      const newState = state.slice();
      newState.splice(action.index ?? -1, 1);
      return newState;
    }
    case SampleActionType.update: {
      const newState = state.slice();
      newState[action.index!] = action.project!;
      return newState;
    }
    default:
      return state;
  }
};
