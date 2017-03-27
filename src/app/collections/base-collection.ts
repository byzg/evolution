import * as _ from 'lodash';
import { Injectable } from '@angular/core';

// import { BodyBuilder } from '../services/body-builder.service';

@Injectable()
export class BaseCollection<T> extends Array<T> {
  bodyClass: new () => {};
  constructor() {
    super();
    if (!this.constructor['bodyClass']) throw `
      bodyClass attribute required for ${this.constructor.name}.
      Try to add: static bodyClass: Function = ${this.constructor.name.slice(0, -1)};
    `;
    this.bodyClass = this.constructor['bodyClass'];
  }

  push(elem?: T): number {
    super.push(elem || <T>new this.bodyClass());
    return this.length
  }

  // push(elem?: T): number {
  //   BodyBuilder.build(this.constuctor.name)
  //   super.push(elem || BodyBuilder.build(this.constuctor.name));
  //   return this.length
  // }

  tick(): void {
    _.invokeMap(this, 'tick')
  }

}
