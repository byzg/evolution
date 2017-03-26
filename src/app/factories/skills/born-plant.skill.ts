import { BoardService } from '../../services/board.service';

import { ServiceLocator } from '../../services/service-locator.service';
import { Plants } from '../../collections/alive/plants'
import { CellWater } from '../cells/cell-water'
import { Skill } from '../skill'
import { Plant } from '../bodies/alive/plant'

export class BornPlantSkill extends Skill {
  readonly desc: string = 'Water cells can born plant near itself';
  plants: Plants;
  boardService: BoardService = this.injector.get(BoardService);
  owner: CellWater;
  constructor(owner) {
    super(owner)
    this.plants = ServiceLocator.get('Plants');
  }

  run(): void {
    for (let vector of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
      let plantCoords = {x: this.owner.x + vector[0], y: this.owner.y + vector[1] };
      if (this.boardService.isFreeSpace(plantCoords)) {
        this.plants.push(new Plant(plantCoords));
        break
      }
    }
  }
}
