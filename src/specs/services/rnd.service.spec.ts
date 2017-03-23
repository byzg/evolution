import { TestBed, inject } from '@angular/core/testing';

import { RndService } from '../../app/services/rnd.service';

describe('RndService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RndService]
    });
  });

  it('should ...', inject([RndService], (service: RndService) => {
    expect(service).toBeTruthy();
  }));
});
