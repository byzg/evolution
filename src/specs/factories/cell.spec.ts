import * as _ from 'lodash-es';

import { BoardService } from '../../app/services/board.service';
import { RndService } from '../../app/services/rnd.service';
import { SkillBuilder } from '../../app/services/skill-builder.service';

import { configureTestingModuleForFactory, InstanceBuilder } from '../support/spec-helper';
import { Cell, Probas } from '../../app/factories/cell';

class CellChild extends Cell {
  get PROBAS(): Probas {
    return {
      generateSkills: {
        dancing: 1
      }
    };
  };
}
describe('Cell', () => {
  configureTestingModuleForFactory([BoardService, RndService]);
  const instance = new InstanceBuilder(afterEach, CellChild).getInstanceFn();

  describe('.constructor', () => {
    let rndSpy: jasmine.Spy;
    let boardSpy: jasmine.Spy;
    const RANDOM_X = 51;
    const RANDOM_Y = 17;
    beforeEach(() => {
      rndSpy = spyOn(RndService.prototype, 'coords')
        .and.returnValue({ x: RANDOM_X, y: RANDOM_Y });
      boardSpy = spyOn(BoardService.prototype, 'occupySpace');
    });
    it('should set randomly coordinates', () => {
      expect(instance().x).toEqual(51);
      expect(instance().y).toEqual(17);
      expect(rndSpy).toHaveBeenCalled();
      expect(boardSpy).toHaveBeenCalledWith({ x: RANDOM_X, y: RANDOM_Y });
    });

    it('should set given coordinates if its a numbers both given', () => {
      expect(instance.force({ x: null, y: 39}).y).toEqual(RANDOM_Y);
      expect(instance.force({ x: 23, y: null}).x).toEqual(RANDOM_X);
      expect(instance.force({ x: 23, y: 'some string'}).x).toEqual(23);
      expect(instance.force({ x: 'some string', y: 39}).x).toEqual('some string');
      expect(instance.force({ x: 27, y: 34}).x).toEqual(27);
    });
  });

  describe('#PROBAS', () => {
    it('should be given', () => {
      class CellChild extends Cell {}
      const _instance = new CellChild();
      expect(_instance.PROBAS).toEqual({
        generateSkills: {}
      });
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
