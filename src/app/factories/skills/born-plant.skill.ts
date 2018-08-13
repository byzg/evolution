import * as _ from 'lodash-es';

import { BoardService } from '../../services/board.service';

import { ServiceLocator } from '../../services/service-locator.service';
import { Plants } from '../../collections/alive/plants';
import { CellWater } from '../cells/cell-water';
import { Skill } from '../skill';
import { Plant } from '../bodies/alive/plant';

export class BornPlantSkill extends Skill {
  readonly desc: string = 'Water cells can born plant near itself';
  boardService: BoardService = this.injector.get(BoardService);
  plants: Plants = ServiceLocator.injector.get(Plants);
  owner: CellWater;

  run(): void {
    const vector = _.sample([[-1, 0], [0, -1], [1, 0], [0, 1]]);
    const plantCoords = {x: this.owner.x + vector[0], y: this.owner.y + vector[1] };
    if (this.boardService.isFreeSpace(plantCoords)) {
      this.plants.push(new Plant(plantCoords));
    }
  }
}
