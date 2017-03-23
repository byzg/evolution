export class SkillBuilder {
  static readonly MAP = {};
  static build(skillName): Skill {
    return new SkillBuilder.MAP[skillName]()
  }
}

export abstract class Skill {


}
