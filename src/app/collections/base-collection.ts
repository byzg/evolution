import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseCollection<T> extends Array<T> {
  bodyClass: new () => {};
  constructor() {
    super();
    if (!this.constructor['bodyClass']) {
      throw new Error(`
        bodyClass attribute required for ${this.constructor.name}.
        Try to add: static bodyClass: Function = ${this.constructor.name.replace(/s$/, '')};
      `);
    }
    this.bodyClass = this.constructor['bodyClass'];
  }

  push(elem?: T): number {
    super.push(elem || <T>new this.bodyClass());
    return this.length;
  }

  tick(): void {
    _.invokeMap(this, 'tick');
  }

}
