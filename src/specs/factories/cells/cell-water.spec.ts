import { configureTestingModuleWithSL } from '../../support/spec-helper';
import { CellWater } from '../../../app/factories/cells/cell-water';
import { BoardService } from '../../../app/services/board.service';
import { RndService } from '../../../app/services/rnd.service';

describe('CellWater', () => {
  configureTestingModuleWithSL([BoardService, RndService]);
  beforeEach(() => {
    this.instance = new CellWater();
  });
  describe('#PROBAS', () => {
    it('should be given', () => {
      expect(this.instance.PROBAS).toEqual({
        generateSkills: {
          BornPlant: 1
        }
      });
    });
  });
});
