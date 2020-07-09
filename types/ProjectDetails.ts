export interface ProjectDetails {
  client: string;
  location: string;
  number: string;
  name: string;
  id?: number;
}

export enum ProjectActionType {
  add = 'addProject',
  remove = 'removeProject',
  update = 'updateProject',
}

export interface ProjectDetailsAction {
  project?: ProjectDetails;
  type: ProjectActionType;
  index?: number;
}
