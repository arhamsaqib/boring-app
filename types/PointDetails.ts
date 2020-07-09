export interface PointDetails {
  projectNum?: string;
  pointId?: string;
  drillingMethod?: string;
  drillingCrew?: string;
  hammerType?;
  loggedBy?;
  equipmentUsed?;
  holeDepth?: number;
  augralRefusal?: string;
  dateDrilled?;
  boringBegin?;
  boringEnd;
  elevation?: number;
  station?;
  offset?;
  boringLocation?;
  weather?;
  waterDepth?;
  east?;
  north?;
}

export enum PointActionType {
  add = 'addPoint',
  remove = 'removePoint',
  update = 'updatePoint',
}

export interface PointDetailsAction {
  project?: PointDetails;
  type: PointActionType;
  index?: number;
}
