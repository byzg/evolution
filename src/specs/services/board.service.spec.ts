import { TestBed, inject } from '@angular/core/testing';

import { BoardService } from '../../app/services/board.service';

describe('BoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardService]
    });
  });

  it('should ...', inject([BoardService], (service: BoardService) => {
    expect(service).toBeTruthy();
  }));
});
