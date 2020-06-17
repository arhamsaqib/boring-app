import {combineReducers} from 'react-redux';
/*
const clientReducer = (state = '', action) => {
  return action.payload;
};
const projectNameReducer = (state = '', action) => {
  return action.payload;
};
const projectNumberReducer = (state = '', action) => {
  return action.payload;
};
const locationReducer = (state = '', action) => {
  return action.payload;
};
*/
const projectDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case 'Client':
      return {...state, Client: action.payload};
    case 'ProjectName':
      return {
        ...state,
        ProjectName: action.payload,
      };
    case 'ProjectNumber':
      return {
        ...state,
        ProjectNumber: action.payload,
      };
    case 'Location':
      return {
        ...state,
        Location: action.payload,
      };
  }
};
/*
const allReducers = combineReducers({
  client: clientReducer,
  projectName: projectNameReducer,
  location: locationReducer,
  projectNumber: projectNumberReducer,
});
*/
export default projectDetailsReducer;
