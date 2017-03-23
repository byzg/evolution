import { TestBed, inject } from '@angular/core/testing';

import { ServiceLocatorService } from '../../app/services/service-locator.service';

describe('ServiceLocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceLocatorService]
    });
  });

  it('should ...', inject([ServiceLocatorService], (service: ServiceLocatorService) => {
    expect(service).toBeTruthy();
  }));
});
