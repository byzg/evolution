import * as _ from 'lodash-es';
import { Injectable } from '@angular/core';

import { BoardService, ICoords } from './board.service';

@Injectable()
export class RndService {
  constructor(
    protected board: BoardService
  ) { }

  coords(): ICoords {
    const freeSpace = _.sample(this.board.spaces);
    const x = freeSpace.x;
    const y = _.sample(freeSpace.y);
    return { x, y };
  }

  runWithProb(n: number, fn: Function): boolean {
    if (n > 1) {
      throw new Error('Prob should be less than or equal 1');
    }
    if (n < 0) {
      throw new Error('Prob should be grater than or equal 0');
    }
    if (Math.random() <= n) {
      fn();
      return true;
    } else {
      return false;
    }
  }
}
