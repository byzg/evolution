import { Cell, Probas } from '../cell';

export class CellWater extends Cell {
  get PROBAS(): Probas {
    return {
      generateSkills: {
        BornPlant: 1
      }
    };
  };
}
