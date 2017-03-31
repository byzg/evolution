import { Injector } from '@angular/core';

import { Plants } from '../collections/alive/plants';

export class ServiceLocator {
  static injector: Injector;
  // just for webpack preload some services and collection
  private static services = {
    Plants
  };
}
