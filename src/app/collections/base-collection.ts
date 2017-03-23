import { Injectable } from '@angular/core';

@Injectable()
export class BaseCollection<T> extends Array<T> {
  constructor() {
    super()
  }

}
