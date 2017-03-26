import { Inanimate } from '../inanimate';

import { CellWater } from '../../cells/cell-water';

export class Water extends Inanimate {
  static cellClass: Function = CellWater;
}
