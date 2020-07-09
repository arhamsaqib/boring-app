const INITIAL_STATE: string = '';

const setCurrentPointReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'updateCurrentPoint': {
      return action.name;
    }
    case 'removeCurrent': {
      return '';
    }
    default:
      return state;
  }
};

export default setCurrentPointReducer;
