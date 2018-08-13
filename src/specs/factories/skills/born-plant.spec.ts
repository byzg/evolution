import * as _ from 'lodash-es';

import { BornPlantSkill } from '../../../app/factories/skills/born-plant.skill';
import { configureTestingModuleWithSL, hardSpyOn } from '../../support/spec-helper';
import { BoardService } from '../../../app/services/board.service';
import { Plants } from '../../../app/collections/alive/plants';
import { CellWater } from '../../../app/factories/cells/cell-water';
import { RndService } from '../../../app/services/rnd.service';

describe('BornPlantSkill', () => {
  configureTestingModuleWithSL([BoardService, Plants, RndService]);
  beforeEach(() => {
    const owner = new CellWater({ x: 10, y: 10 });
    this.instance = new BornPlantSkill(owner);
  });

  describe('#run', () => {
    it('should add new plant to plants when board free in the place', ()=> {
      hardSpyOn(_, 'sample').and.returnValue([0, 1]);
      this.instance.run();
      expect(this.instance.plants.length).toEqual(1);
      this.instance.run();
      expect(this.instance.plants.length).toEqual(1);
    })
  });
});
