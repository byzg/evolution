import * as _ from 'lodash';
import { Injectable } from '@angular/core';

export interface ICoords {
  x: number,
  y: number
}

interface ISpaceLine {
  x: number,
  y: Array<number>
}

@Injectable()
export class BoardService {
  readonly WIDTH: Number = 100;
  readonly HEIGHT: Number = 20;

  spaces: Array<ISpaceLine> = [];
  constructor() {
    _.times(this.WIDTH, (i)=> {
      let space = { x: i, y: [] };
      _.times(this.HEIGHT, (j)=> space.y.push(j));
      this.spaces.push(space);
    })
  }

  occupySpace(coord: ICoords) {
    let line: ISpaceLine = _(this.spaces).find((spaceLine)=> spaceLine.x == coord.x);
    _.pull(line.y, coord.y);
    if (_.isEmpty(line.y)) _.pull(this.spaces, line);
  }

}
