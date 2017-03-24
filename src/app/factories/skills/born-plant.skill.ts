import * as _ from 'lodash';

import { BoardService } from '../../services/board.service';

import { Plants } from '../../collections/alive/plants'
import { CellWater } from '../cells/cell-water'
import { Skill } from '../skill'
import { Plant } from '../bodies/alive/plant'

export class BornPlantSkill extends Skill {
  readonly desc: string = 'Water cells can born plant near itself';
  boardService: BoardService = this.injector.get(BoardService);
  plants: Plants = this.injector.get(Plants);
  owner: CellWater;

  constructor(owner) {
    super(owner)
  }

  run(): void {
    for (let vector of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
      if (this.boardService.isFreeSpace({x: this.owner.x + vector[0], y: this.owner.y + vector[1] })) {
        this.plants.push(new Plant());
        break
      }
    }
  }
}
