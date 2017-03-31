import * as _ from 'lodash';

export class BaseCollection<T> extends Array<T> {
  bodyClass: new () => {};
  constructor() {
    super();
    if (!this.constructor['bodyClass']) throw `
      bodyClass attribute required for ${this.constructor.name}.
      Try to add: static bodyClass: Function = ${this.constructor.name.slice(0, -1)};
    `;
  }

  push(elem?: T): number {
    if (!this.bodyClass) { this.bodyClass = this.constructor['bodyClass']; }
    super.push(elem || <T>new this.bodyClass());
    return this.length
  }

  tick(): void {
    _.invokeMap(this, 'tick')
  }

}
