export abstract class Body {
  cells: Array<any> = [new this.constructor['cellClass']];
}
