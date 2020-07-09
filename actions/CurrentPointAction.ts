const setCurrentPoint = (name) => {
  return {
    type: 'updateCurrentPoint',
    name: name,
  };
};
export const RemoveCurrentPoint = () => {
  //console.log('in action');
  return {
    type: 'removeCurrent',
  };
};

export default setCurrentPoint;
