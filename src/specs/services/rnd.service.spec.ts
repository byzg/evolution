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

  it('should ...', inject([RndService], (service: RndService) => {
    expect(service).toBeTruthy();
  }));
});
