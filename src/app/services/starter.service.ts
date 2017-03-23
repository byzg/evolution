import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { Water } from '../factories/bodies/inanimate/water'

import { Waters } from '../collections/inanimate/waters'


@Injectable()
export class StarterService {
  constructor(waters: Waters) {
    _.times(300, ()=> {
      waters.push(new Water())
    })
  }

}
