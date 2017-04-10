// import { BoardService } from '../../app/services/board.service';
// import { RndService } from '../../app/services/rnd.service';

import { Cell } from '../../app/factories/cell';

class CellChild extends Cell {}
describe('Cell', () => {
  const instance = (...args) => {
    if (!this._instance) { this._instance = new CellChild(args[0] || {}); }
    return this._instance;
  };
  afterEach(() => this._instance = null);
  describe('.constructor', () => {
    it('should set randomly coordinates', () => {
      // instance();
      // const rndSpy = spyOn(RndService.prototype, 'coords').and.returnValue({ x: 51, y: 17 });
      // const boardSpy = spyOn(BoardService.prototype, 'occupySpace');
      // expect(instance().x).toEqual(51);
      // expect(instance().y).toEqual(17);
      // expect(rndSpy).toHaveBeenCalled();
      // expect(boardSpy).toHaveBeenCalledWith({ x: 51, y: 17 });
    });

    // it('should has owner as given parameter on constructor', () => {
    //   const owner = {name: 'qwe'};
    //   expect(instance(owner).owner).toBe(owner);
    // });
  });
});
