import { ServiceLocator } from '../services/service-locator.service'
import { RndService } from '../services/rnd.service'

export abstract class Cell {
  rnd: RndService = ServiceLocator.injector.get(RndService);
  x: number = this.rnd.coords.x();
  y: number = this.rnd.coords.x();
  constructor() {
  }

}
