import {ProjectAction} from './project';
import {Project} from 'entities';

export interface ReduxProjectAction {
  project?: Project;
  index?: number;
  type: ProjectAction;
}
