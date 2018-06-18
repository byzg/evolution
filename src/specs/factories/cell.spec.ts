import * as _ from 'lodash-es';

import { TestBed, inject } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { ServiceLocator } from '../../app/services/service-locator.service';
import { BoardService } from '../../app/services/board.service';
import { RndService } from '../../app/services/rnd.service';

import { InstanceBuilder } from '../support/spec-helper';
import { Cell } from '../../app/factories/cell';

class CellChild extends Cell {
  readonly PROBAS = {
    generateSkills: {
      dancing: 1
    }
  };
}
describe('Cell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BoardService,
        RndService
      ]
    });
  });
  beforeEach(inject([Injector], (injector: Injector) => {
    ServiceLocator.injector = injector;
  }));
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
      expect(instance({ x: 23, y: null}).x).toEqual(51);
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

  // describe('#generateSkills', () => {
  //   it('should call #generateSkills and run all skills', () => {
  //     spyOn(instance(), 'generateSkills');
  //     instance().generateSkills();
  //   });
  // });
});
