import * as _ from 'lodash';

import { BoardService, ICoords } from '../services/board.service';
import { ServiceLocator } from '../services/service-locator.service';
import { RndService } from '../services/rnd.service';
import { SkillBuilder } from '../services/skill-builder.service';

import { Skill } from './skill';

interface IProbas {
  generateSkills: {
    [index: string]: number
  };
}

export abstract class Cell {
  rnd: RndService = ServiceLocator.injector.get(RndService);
  board: BoardService = ServiceLocator.injector.get(BoardService);
  x: number;
  y: number;
  skills: Array<Skill> = [];
  readonly PROBAS: IProbas = {
    generateSkills: {}
  };
  constructor(opts?: ICoords) {
    let coords = null;
    if (opts) {
      const [x, y]: [number, number] = [opts.x, opts.y];
      if (_.isNumber(x) && _.isNumber(y)) { coords = { x, y }; }
    }
    _.extend(this, coords || this.rnd.coords());
    this.board.occupySpace({ x: this.x, y: this.y });
  }

  tick(): void {
    this.generateSkills();
    _.invokeMap(this.skills, 'run');
  }

  generateSkills(): void {
    _.each(this.PROBAS.generateSkills, (prob, skillName) => {
      if (!_(this.skills).find(['name', skillName])) {
        this.rnd.runWithProb(prob, () => this.skills.push(SkillBuilder.build(skillName, this)));
      }
    });
  }

}
