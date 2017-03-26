import { Alive } from '../alive';
import { CellPlant } from '../../cells/cell-plant';

export class Plant extends Alive {
  static cellClass: Function = CellPlant;
}
