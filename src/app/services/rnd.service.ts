import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { BoardService, ICoords } from './board.service'

@Injectable()
export class RndService {
  constructor(
    protected board: BoardService
  ) { }

  coords(): ICoords {
    let freeSpace = _.sample(this.board.spaces);
    let x = freeSpace.x;
    let y = _.sample(freeSpace.y);
    this.board.occupySpace({ x, y });
    return { x, y }
  }

  runWithProb(n: number, fn: Function): boolean {
    if (n > 1) throw 'Prob should be less than or equal 1';
    if (n < 0) throw 'Prob should be grater than or equal 0';
    if (Math.random() <= n) {
      fn();
      return true
    } else return false
  }
}
