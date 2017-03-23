import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseCollection<T> extends Array<T> {
  constructor() {
    super()
  }

  tick(): void {
    _.invokeMap(this, 'tick')
  }

}
