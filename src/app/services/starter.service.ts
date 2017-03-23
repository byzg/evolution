import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { Water } from '../factories/bodies/inanimate/water'

import { Waters } from '../collections/inanimate/waters'

@Injectable()
export class StarterService {
  tick: number = 0;
  collections: Array<any[]> = [];
  constructor(waters: Waters) {
    _.times(300, ()=> {
      waters.push(new Water())
    });
    this.collections.push(waters);
    this.startTicks();
  }

  startTicks() {
    setInterval(()=> {
      this.tick++;
      _.invokeMap(this.collections, 'tick');
    }, 1000)
  }

}
