import { configureTestingModuleWithSL } from '../support/spec-helper';
import { SkillBuilder } from '../../app/services/skill-builder.service';
import { BornPlantSkill } from '../../app/factories/skills/born-plant.skill';

describe('SkillBuilder', () => {

  describe('.build', () => {
    it('should create new skill instance', () => {
      const bornPlantSkill = new BornPlantSkill({});
      expect(SkillBuilder.build('BornPlant', {}))
        .toEqual(bornPlantSkill);
    });

    it('should raise error', () => {
      expect(() => SkillBuilder.build('Dancing', {}))
        .toThrow(new Error('There is no skill with name Dancing'));
    });
  });
});
