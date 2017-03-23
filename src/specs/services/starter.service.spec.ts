import { TestBed, inject } from '@angular/core/testing';

import { StarterService } from '../../app/services/starter.service';

describe('StarterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarterService]
    });
  });

  it('should ...', inject([StarterService], (service: StarterService) => {
    expect(service).toBeTruthy();
  }));
});
