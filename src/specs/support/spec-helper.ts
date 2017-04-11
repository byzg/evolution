interface IInstanceFn {
  (...args): any;
  drop: Function;
  force: Function;
}

export class InstanceBuilder {
  private _instance: any;
  constructor(private afterEach, private klass) {
    afterEach(this.drop);
  };
  getInstanceFn(): IInstanceFn {
    let instanceFn: IInstanceFn;

    instanceFn = (() => {
      const _f: any = (...args) => {
        if (!this._instance) { this.build(...args); }
        return this._instance;
      };
      _f.force = this.force.bind(this);
      _f.drop = this.drop.bind(this);
      return _f;
    })();
    return instanceFn;
  };
  force(...args) {
    return this.build(...args);
  }
  drop() {
    this._instance = null;
  };
  private build(...args) {
    return this._instance = new this.klass(...args);
  }
}
