import * as _ from 'lodash';
import { Injectable } from '@angular/core';

// import { BodyBuilder } from '../services/body-builder.service';

@Injectable()
export class BaseCollection<T> extends Array<T> {
  constructor() {
    super()
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
