import * as _ from 'lodash-es';

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
  }

  push(elem?: T): number {
    if (!this.bodyClass) { this.bodyClass = this.constructor['bodyClass']; }
    super.push(elem || <T>new this.bodyClass());
    return this.length;
  }

  tick(): void {
    _.invokeMap(this, 'tick');
  }

}
