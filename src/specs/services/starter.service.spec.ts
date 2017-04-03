// import { Injector } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

// import { AppModule } from '../../app/app.module';
// import { ServiceLocator } from '../../app/services/service-locator.service';
import { Plants } from '../../app/collections/alive/plants';
import { Waters } from '../../app/collections/inanimate/waters';
import { StarterService } from '../../app/services/starter.service';

// class StubInjector extends Injector {
//   get(token: any, notFoundValue?: any): any {
//     super.get(token, notFoundValue)
//   }
// }

describe('StarterService', () => {
  beforeEach(() => {
    // ServiceLocator.injector = new Injector();
    // inject([Injector], (injector: Injector) => {
    //   ServiceLocator.injector = injector;
    // });
    TestBed.configureTestingModule({
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
