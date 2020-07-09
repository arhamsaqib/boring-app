const setCurrentProject = (name) => {
  return {
    type: 'updateCurrentProject',
    name: name,
  };
};

export default setCurrentProject;
