import * as _ from 'lodash-es';

export abstract class Body {
  cells: Array<any>;

  constructor(opts: Object) {
    if (!this.constructor['cellClass']) {
      throw new Error(`
        cellClass attribute required for ${this.constructor.name}.
        Try to add: static cellClass: Function = Cell${this.constructor.name};
      `);
    }
    this.cells = [new this.constructor['cellClass'](opts)];
  }

  tick(): void {
    _.invokeMap(this.cells, 'tick');
  }
}
