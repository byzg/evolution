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

  describe('.constructor', () => {
    let watersPushSpy: jasmine.Spy;
    let plantsPushSpy: jasmine.Spy;
    let startTicksSpy: jasmine.Spy;
    beforeEach(() => {
      watersPushSpy = spyOn(Waters.prototype, 'push');
      plantsPushSpy = spyOn(Plants.prototype, 'push');
      startTicksSpy = spyOn(StarterService.prototype, 'startTicks')
    });

    it('should give water and plats to the world', inject([StarterService], (service: StarterService) => {
      expect(watersPushSpy).toHaveBeenCalledTimes(10);
      expect(watersPushSpy).toHaveBeenCalledTimes(10);
    }));

    it('should call startTicks', inject([StarterService], (service: StarterService) => {
      expect(startTicksSpy).toHaveBeenCalledTimes(1);
    }));

    it('should fill his collection for ticks',
      inject([StarterService, Waters], (service: StarterService, waters: Waters) => {
        expect(service.collections[0]).toBe(waters);
        expect(service.collections.length).toBe(1);
    }));
  });
});
