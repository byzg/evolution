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
}
