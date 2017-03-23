export interface ISkill {
  name: string,
  desc: string
}

export abstract class Skill {
  get name(): string {
    return Skill.replaceName(this.constructor.name)
  }

  static className(): string {
    return this.replaceName(this.name)
  }

  readonly desc: string;
  constructor() {}

  protected static replaceName(name): string {
    return name.replace(/skill$/i, '')
  }
}
