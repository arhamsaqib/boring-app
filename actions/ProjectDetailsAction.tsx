export const ClientX = (val) => {
  return {
    type: 'Client',
    payload: val,
  };
};
export const Client = (val) => ({
  type: 'Client',
  val,
});
export const ProjectName = (val) => {
  return {
    type: 'ProjectName',
    payload: val,
  };
};
export const Location = (val) => {
  return {
    type: 'Location',
    payload: val,
  };
};
export const ProjectNumber = (val) => {
  return {
    type: 'ProjectNumber',
    payload: val,
  };
};
