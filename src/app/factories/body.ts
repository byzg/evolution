import * as _ from 'lodash';

export abstract class Body {
  cells: Array<any> = [new this.constructor['cellClass']];

  tick(): void {
    _.invokeMap(this.cells, 'tick')
  }
}
