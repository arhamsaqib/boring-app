const INITIAL_STATE: string = '';

const SetCurrentIndex = (state = INITIAL_STATE, action) => {
  // console.log('in add counter reducer');
  switch (action.type) {
    case 'updateIndex': {
      return action.index;
    }
    default:
      return state;
  }
};

export default SetCurrentIndex;
