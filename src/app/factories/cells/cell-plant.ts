import { Cell, Probas } from '../cell';

export class CellPlant extends Cell {
  get PROBAS(): Probas {
    return {
      generateSkills: {
      }
    };
  };
}
