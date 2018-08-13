import { configureTestingModuleWithSL } from '../../support/spec-helper';
import { CellPlant } from '../../../app/factories/cells/cell-plant';
import { BoardService } from '../../../app/services/board.service';
import { RndService } from '../../../app/services/rnd.service';

describe('CellPlant', () => {
  configureTestingModuleWithSL([BoardService, RndService]);
  beforeEach(() => {
    this.instance = new CellPlant();
  });
  describe('#PROBAS', () => {
    it('should be given', () => {
      expect(this.instance.PROBAS).toEqual({
        generateSkills: {}
      });
    });
  });
});
