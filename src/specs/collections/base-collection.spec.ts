import { TestBed, inject } from '@angular/core/testing';

import { BaseCollection } from '../../app/collections/base-collection';

describe('BaseCollection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseCollection]
    });
  });

  it('should ...', inject([BaseCollection], (service: BaseCollection) => {
    expect(service).toBeTruthy();
  }));
});
