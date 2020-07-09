import setCurrentProject from 'actions/CurrentProjectAction';

const INITIAL_STATE: string = '';

const setCurrentReducer = (state = INITIAL_STATE, action) => {
  // console.log('in add counter reducer');
  switch (action.type) {
    case 'updateCurrentProject': {
      return action.name;
    }
    default:
      return state;
  }
};

export default setCurrentReducer;
