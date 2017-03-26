import { Injectable } from '@angular/core';

import { Water } from '../../factories/bodies/inanimate/water';

import { BaseCollection } from '../base-collection';

@Injectable()
export class Waters extends BaseCollection<Water> {
  static bodyClass: Function = Water;

}
