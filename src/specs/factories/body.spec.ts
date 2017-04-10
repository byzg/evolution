import * as _ from 'lodash';

import { Body } from '../../app/factories/body';

class BodyChild extends Body {}
class CellStub {}

describe('Body', () => {
  const instance = () => {
    if (!this._instance) { this._instance = new BodyChild({}); }
    return this._instance;
  };
  beforeEach(() => BodyChild['cellClass'] = CellStub);
  afterEach(() => this._instance = null);

  describe('.constructor', () => {
    it('should raise if there is no cellClass', () => {
      BodyChild['cellClass'] = null;
      expect(() => { new BodyChild({}); }).toThrow();
    });
  });

  describe('#tick', () => {
    it('should call tick for each element of collection', (() => {
      spyOn(_, 'invokeMap');
      instance().tick();
      expect(_.invokeMap).toHaveBeenCalledWith(instance().cells, 'tick');
    }));
  });
});
