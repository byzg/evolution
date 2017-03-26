import { Injector } from '@angular/core';

import { Plants } from '../collections/alive/plants'

export class ServiceLocator {
  static injector: Injector;
  static services = {
    Plants
  };

  static get(serviceName: string) {
    return this.injector.get(this.services[serviceName])
  }
}
