import * as _ from 'lodash';

import { Skill } from '../factories/skill';
import { BornPlantSkill } from '../factories/skills/born-plant.skill';

const SkillClasses = [BornPlantSkill];
export class SkillBuilder {
  static readonly MAP = _.zipObject(_.map(SkillClasses, (SkillClass) => SkillClass.className()), SkillClasses);
  static build(skillName: string, owner: Object): Skill {
    if (!SkillBuilder.MAP[skillName]) {
      throw new Error(`There is no skill with name ${skillName}`);
    }
    return new SkillBuilder.MAP[skillName](owner);
  }
}
