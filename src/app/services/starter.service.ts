import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { Waters } from '../collections/inanimate/waters';
import { Plants } from '../collections/alive/plants';

@Injectable()
export class StarterService {
  tick: number = 0;
  pause: boolean = false;
  collections: Array<any[]> = [];
  constructor(waters: Waters, plants: Plants) {
    _.times(400, ()=> {
      waters.push();
      // plants.push()
    });
    this.collections.push(waters);
    this.startTicks();
  }

  startTicks() {
    setInterval(()=> {
      if (!this.pause) {
        this.tick++;
        _.invokeMap(this.collections, 'tick');
      }
    }, 1000)
  }

  togglePause() {
    this.pause = !this.pause
  }

}
