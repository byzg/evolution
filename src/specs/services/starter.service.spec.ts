import { TestBed, inject } from '@angular/core/testing';

import { AppModule } from '../../app/app.module';
import { Plants } from '../../app/collections/alive/plants';
import { Waters } from '../../app/collections/inanimate/waters';
import { StarterService } from '../../app/services/starter.service';

describe('StarterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        Plants,
        Waters,
        StarterService
      ]
    });
  });

  it('should ...', inject([StarterService], (service: StarterService) => {
    expect(service).toBeTruthy();
  }));
});
