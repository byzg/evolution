import { inject, TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';

import { ServiceLocator } from '../../app/services/service-locator.service';

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

export function hardSpyOn(obj: Object, fnName: string): jasmine.Spy {
  Object.defineProperty(obj, fnName, { writable: true });
  obj[fnName] = function () {};
  return spyOn(obj, fnName)
}

export const configureTestingModuleForFactory = (providers) => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers });
  });
  beforeEach(inject([Injector], (injector: Injector) => {
    ServiceLocator.injector = injector;
  }));
}
