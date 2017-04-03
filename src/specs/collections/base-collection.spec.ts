import { TestBed, inject } from '@angular/core/testing';

import { BaseCollection } from '../../app/collections/base-collection';

class StubBodyClass {}

describe('BaseCollection', () => {
  beforeEach(() => {
    BaseCollection['bodyClass'] = StubBodyClass;
    TestBed.configureTestingModule({
      providers: [BaseCollection]
    });
  });

  it('should ...', inject([BaseCollection], (service: BaseCollection<any>) => {
    expect(service).toBeTruthy();
  }));
});
