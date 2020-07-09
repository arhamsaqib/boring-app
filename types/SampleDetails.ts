export interface SampleDetails {
  projectNum?: string;
  pointNum?: string;
  depth: string;
  length: string;
  sampletype: string;
  blow1: string;
  blow2: string;
  blow3: string;
  blow4: string;
  nq: string;
  qu: string;
  begintime: Date;
  endtime: Date;
  recovery: string;
  rqd: string;
}

export enum SampleActionType {
  add = 'addSample',
  remove = 'removeSample',
  update = 'updateSample',
}

export interface SampleDetailsAction {
  project?: SampleDetails;
  type: SampleActionType;
  index?: number;
}
