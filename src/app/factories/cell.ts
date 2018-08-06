import * as _ from 'lodash-es';

import { BoardService, Coords } from '../services/board.service';
import { ServiceLocator } from '../services/service-locator.service';
import { RndService } from '../services/rnd.service';
import { SkillBuilder } from '../services/skill-builder.service';

import { Skill } from './skill';

export interface Probas {
  generateSkills: {
    [index: string]: number
  };
}

export abstract class Cell {
  get PROBAS(): Probas {
    return {
      generateSkills: {
      }
    };
  };
  rnd: RndService = ServiceLocator.injector.get(RndService);
  board: BoardService = ServiceLocator.injector.get(BoardService);
  x: number;
  y: number;
  skills: Array<Skill> = [];
  constructor(opts?) {
    const { x, y }: Coords = opts || {};
    _.extend(this, (x && y) ? { x, y } : this.rnd.coords());
    this.board.occupySpace({ x: this.x, y: this.y });
  }

  tick(): void {
    this.generateSkills();
    _.invokeMap(this.skills, 'run');
  }

  generateSkills(): void {
    _.each(this.PROBAS.generateSkills, (prob, skillName) => {
      if (!_.find(this.skills, ['name', skillName])) {
        this.rnd.runWithProb(prob, () => this.skills.push(SkillBuilder.build(skillName, this)));
      }
    });
  }

}
