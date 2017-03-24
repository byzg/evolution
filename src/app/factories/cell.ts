import * as _ from 'lodash';

import { ServiceLocator } from '../services/service-locator.service';
import { RndService } from '../services/rnd.service';
import { SkillBuilder } from '../services/skill-builder.service';

import { Skill } from './skill'

export abstract class Cell {
  rnd: RndService = ServiceLocator.injector.get(RndService);
  x: number;
  y: number;
  skills: Array<Skill> = [];
  readonly PROBAS = {
    generateSkills: {}
  };
  constructor() {
    _.extend(this, this.rnd.coords())
  }

  tick(): void {
    this.generateSkills();
    _.invokeMap(this.skills, 'run')
  }

  generateSkills(): void {
    _.each(this.PROBAS.generateSkills, (prob, skillName)=> {
      if (!_(this.skills).find(['name', skillName]))
        this.rnd.runWithProb(prob, ()=> this.skills.push(SkillBuilder.build(skillName, this)))
    })
  }

}
