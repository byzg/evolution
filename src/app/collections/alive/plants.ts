import { Injectable } from '@angular/core';

import { BaseCollection } from '../base-collection';
import { Plant } from '../../factories/bodies/alive/plant';


@Injectable()
export class Plants extends BaseCollection<Plant> {
  static bodyClass: Function = Plant;
}
