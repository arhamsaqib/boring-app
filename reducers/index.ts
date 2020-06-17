import {projectReducer} from './ProjectReducer';
import {combineReducers} from 'redux';

export const combinedReducers = combineReducers({
  projects: projectReducer,
});
