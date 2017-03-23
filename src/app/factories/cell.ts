import * as _ from 'lodash';
import { ServiceLocator } from '../services/service-locator.service'
import { RndService } from '../services/rnd.service'

export abstract class Cell {
  rnd: RndService = ServiceLocator.injector.get(RndService);
  x: number;
  y: number;
  constructor() {
    _.extend(this, this.rnd.coords())
  }

}
