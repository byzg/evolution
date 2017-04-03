import { TestBed, inject } from '@angular/core/testing';

import { ServiceLocator } from '../../app/services/service-locator.service';

describe('ServiceLocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceLocator]
    });
  });

  it('should ...', inject([ServiceLocator], (service: ServiceLocator) => {
    expect(service).toBeTruthy();
  }));
});
