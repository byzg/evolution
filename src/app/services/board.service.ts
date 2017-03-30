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
  readonly WIDTH: number = 100;
  readonly HEIGHT: number = 20;

  spaces: Array<ISpaceLine> = [];
  constructor() {
    _.times(this.WIDTH, (i)=> {
      let space = { x: i, y: [] };
      _.times(this.HEIGHT, (j)=> space.y.push(j));
      this.spaces.push(space);
    })
  }

  occupySpace(coord: ICoords) {
    let line: ISpaceLine = this.findLine(coord.x);
    _.pull(line.y, coord.y);
    if (_.isEmpty(line.y)) _.pull(this.spaces, line);
  }

  isFreeSpace(coords: ICoords): boolean {
    if (!this.isInBorder(coords)) return false;
    let line: ISpaceLine = this.findLine(coords.x);
    return line && line.y.includes(coords.y)
  }

  isInBorder(coords: ICoords): boolean {
    return coords.x < this.WIDTH && coords.x >= 0 && coords.y < this.HEIGHT && coords.y >= 0
  }

  private findLine(x: number): ISpaceLine {
    return _(this.spaces).find((spaceLine)=> spaceLine.x == x)
  }

}
