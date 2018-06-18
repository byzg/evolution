import * as _ from 'lodash-es';
import { TestBed, inject } from '@angular/core/testing';

import { BoardService, ISpaceLine } from '../../app/services/board.service';

describe('BoardService', () => {
  const findLine = (service, x: number): ISpaceLine => {
    return _(service.spaces).find((spaceLine) => spaceLine.x === x);
  };
  const coord = { x: 14, y: 17 };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardService]
    });
  });

  describe('#occupySpace', () => {
    it('should remove given Y-coordinate from free spaces', inject([BoardService], (service: BoardService) => {
      const line: ISpaceLine = findLine(service, coord.x);
      expect(line.y[coord.y]).toBeTruthy();
      expect(line.y.length).toEqual(service.HEIGHT);
      service.occupySpace(coord);
      expect(line[coord.y]).toBeFalsy();
      expect(line.y.length).toEqual(service.HEIGHT - 1);
    }));
    it('should remove line from free spaces', inject([BoardService], (service: BoardService) => {
      for (let i = 0; i < service.HEIGHT; i++) {
        service.occupySpace({x: 14, y: i});
      }
      const line: ISpaceLine = findLine(service, coord.x);
      expect(line).toBeFalsy();
    }));
  });

  describe('#isFreeSpace', () => {
    it('should return false if #isInBorder returns false', inject([BoardService], (service: BoardService) => {
      spyOn(service, 'isInBorder').and.returnValue(false);
      expect(service.isFreeSpace(coord)).toBe(false);
    }));

    it('should return true for free space', inject([BoardService], (service: BoardService) => {
      expect(service.isFreeSpace(coord)).toBe(true);
    }));

    it('should return false for busy space', inject([BoardService], (service: BoardService) => {
      service.occupySpace(coord);
      expect(service.isFreeSpace(coord)).toBe(false);
    }));
  });

});
