import * as _ from 'lodash-es';

import { BoardService } from '../../app/services/board.service';
import { RndService } from '../../app/services/rnd.service';
import { SkillBuilder } from '../../app/services/skill-builder.service';

import { configureTestingModuleForFactory, InstanceBuilder } from '../support/spec-helper';
import { Cell } from '../../app/factories/cell';

class CellChild extends Cell {
  readonly PROBAS = {
    generateSkills: {
      dancing: 1
    }
  };
}
describe('Cell', () => {
  configureTestingModuleForFactory([BoardService, RndService]);
  const instance = new InstanceBuilder(afterEach, CellChild).getInstanceFn();

  describe('.constructor', () => {
    let rndSpy: jasmine.Spy;
    let boardSpy: jasmine.Spy;
    beforeEach(() => {
      rndSpy = spyOn(RndService.prototype, 'coords').and.returnValue({ x: 51, y: 17 });
      boardSpy = spyOn(BoardService.prototype, 'occupySpace');
    });
    it('should set randomly coordinates', () => {
      expect(instance().x).toEqual(51);
      expect(instance().y).toEqual(17);
      expect(rndSpy).toHaveBeenCalled();
      expect(boardSpy).toHaveBeenCalledWith({ x: 51, y: 17 });
    });

    it('should set given coordinates if its a numbers', () => {
      expect(instance({ x: 23, y: 'is is not number'}).x).toEqual(51);
      expect(instance.force({ x: 'is is not number', y: 39}).y).toEqual(17);
      expect(instance.force({ x: 27, y: 34}).x).toEqual(27);
    });
  });

  describe('#tick', () => {
    it('should call #generateSkills and run all skills', () => {
      spyOn(instance(), 'generateSkills');
      spyOn(_, 'invokeMap');
      instance().tick();
      expect(instance().generateSkills).toHaveBeenCalled();
      expect(_.invokeMap).toHaveBeenCalledWith(instance().skills, 'run');
    });
  });

  describe('#generateSkills', () => {
    it('should add new uniq skill', () => {
      const realRunWithProb = RndService.prototype.runWithProb;
      const rndSpy = spyOn(RndService.prototype, 'runWithProb').and
        .callFake((prob, fn)=> realRunWithProb(prob, fn));
      const skillBuilderSpy = spyOn(SkillBuilder, 'build').and
        .returnValue({ name: 'dancing' });
      instance().generateSkills();
      expect(RndService.prototype.runWithProb).toHaveBeenCalled();
      expect(SkillBuilder.build).toHaveBeenCalledTimes(1);
      expect(instance().skills.length).toBe(1);
      instance().generateSkills();
      expect(instance().skills.length).toBe(1);
      expect(SkillBuilder.build).toHaveBeenCalledTimes(1);
    });
  });
});
