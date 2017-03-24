import { TestBed, inject } from '@angular/core/testing';

import { Plants } from '../../../app/collections/alive/plants';

describe('Plants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Plants]
    });
  });

  it('should ...', inject([Plants], (service: Plants) => {
    expect(service).toBeTruthy();
  }));
});
