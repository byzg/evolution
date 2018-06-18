import * as _ from 'lodash-es';
import { TestBed, inject } from '@angular/core/testing';

import { BoardService } from '../../app/services/board.service';
import { RndService } from '../../app/services/rnd.service';

describe('RndService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BoardService,
        RndService
      ]
    });
  });

  describe('#runWithProb', () => {
    const obj = {
      fn: () => {}
    };
    beforeEach(() => {
      spyOn(obj, 'fn');
    });
    it('should raise if given probe more or less 0', inject([RndService], (service: RndService) => {
      expect(() => { service.runWithProb(-0.2, obj.fn); }).toThrowError();
      expect(() => { service.runWithProb(1.2, obj.fn); }).toThrowError();
      expect(obj.fn).toHaveBeenCalledTimes(0);
    }));

    it('should call fn when prob works', inject([RndService], (service: RndService) => {
      spyOn(Math, 'random').and.returnValue(0.07);
      expect(service.runWithProb(0.1, obj.fn)).toBe(true);
      expect(obj.fn).toHaveBeenCalledTimes(1);
    }));

    it('should call fn when prob does not works', inject([RndService], (service: RndService) => {
      spyOn(Math, 'random').and.returnValue(0.17);
      expect(service.runWithProb(0.1, obj.fn)).toBe(false);
      expect(obj.fn).toHaveBeenCalledTimes(0);
    }));
  });

  describe('#coords', () => {
    it('should raise if given probe more or less 0', inject([RndService], (service: RndService) => {
      spyOn(_, 'sample').and.returnValues({x: 107}, 28);
      expect(service.coords()).toEqual({x: 107, y: 28});
      expect(_.sample).toHaveBeenCalledWith(service['board'].spaces);
    }));
  });
});
