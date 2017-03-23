import { TestBed, inject } from '@angular/core/testing';

import { Waters } from '../../../app/collections/inanimate/waters';

describe('Waters', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Waters]
    });
  });

  it('should ...', inject([Waters], (service: Waters) => {
    expect(service).toBeTruthy();
  }));
});
