import {combineReducers} from 'redux';
import {projectDetailsReducer} from './ProjectDetailsReducer';
import {pointDetailsReducer} from './PointDetailsReducer';
import {sampleDetailsReducer} from './SampleDetailsReducer';
import {lithologyDetailsReducer} from './LithologyDetailsReducer';
import {remarkDetailsReducer} from './RemarkDetailsReducer';
import setCurrentReducer from './CurrentProjectReducer';
import CurrentPointReducer from './CurrentPointReducer';
import SetCurrentIndex from './CurrentIndexReducer';
import {firebaseReducer} from 'react-redux-firebase';

export const allReducers = combineReducers({
  ProjectDetails: projectDetailsReducer,
  PointDetails: pointDetailsReducer,
  SampleDetails: sampleDetailsReducer,
  LithologyDetails: lithologyDetailsReducer,
  RemarkDetails: remarkDetailsReducer,
  CurrentProject: setCurrentReducer,
  CurrentPoint: CurrentPointReducer,
  CurrentIndex: SetCurrentIndex,
  firebase: firebaseReducer,
});
