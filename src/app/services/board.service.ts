import * as _ from 'lodash-es';
import { Injectable } from '@angular/core';

export interface Coords {
  x: number;
  y: number;
}

export interface SpaceLine {
  x: number;
  y: Array<number>;
}

@Injectable()
export class BoardService {
  readonly WIDTH: number = 100;
  readonly HEIGHT: number = 20;

  spaces: Array<SpaceLine> = [];
  constructor() {
    _.times(this.WIDTH, ( i) => {
      const space = { x: i, y: [] };
      _.times(this.HEIGHT,  (j) => space.y.push(j));
      this.spaces.push(space);
    });
  }

  occupySpace(coord: Coords) {
    const line: SpaceLine = this.findLine(coord.x);
    _.pull(line.y, coord.y);
    if (_.isEmpty(line.y)) { _.pull(this.spaces, line);
    }
  }

  isFreeSpace(coords: Coords): boolean {
    if (!this.isInBorder(coords)) { return false; }
    const line: SpaceLine = this.findLine(coords.x);
    return line && line.y.includes(coords.y);
  }

  isInBorder(coords: Coords): boolean {
    return coords.x < this.WIDTH && coords.x >= 0 && coords.y < this.HEIGHT && coords.y >= 0;
  }

  private findLine(x: number): SpaceLine {
    return _.find(this.spaces, (spaceLine) => spaceLine.x === x);
  }

}
