export interface RemarkDetails {
  depth: number;
  description: string;
  projectNum?: string;
  pointNum?: string;
}

export enum RemarkActionType {
  add = 'addRemark',
  remove = 'removeRemark',
  update = 'updateRemark',
}

export interface RemarkDetailsAction {
  project?: RemarkDetails;
  type: RemarkActionType;
  index?: number;
}
