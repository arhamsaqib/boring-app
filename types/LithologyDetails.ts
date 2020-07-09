export interface LithologyDetails {
  projectNum?: string;
  pointNum?: string;
  depth: string;
  bottom: string;
  graphic: string;
  uscs: string;
  consistency: string;
  color: string;
  addcolor1: string;
  addcolor2: string;
  grainsize: string;
  plasticity: string;
  moisture: string;
  rmr: string;
  addDescription: string;
  deposition: string;
  linetype: string;
}

export enum LithologyActionType {
  add = 'addLithology',
  remove = 'removeLithology',
  update = 'updateLithology',
}

export interface LithologyDetailsAction {
  project?: LithologyDetails;
  type: LithologyActionType;
  index?: number;
}
