import { Injector } from '@angular/core';

import { ServiceLocator } from '../services/service-locator.service';

import { Cell } from './cell';
import { Body } from './body';

export interface ISkill {
  name: string,
  desc: string
}

export type SkillOwner = Cell | Body;

export abstract class Skill {
  get name(): string {
    return Skill.replaceName(this.constructor.name)
  }

  static className(): string {
    return this.replaceName(this.name)
  }

  readonly desc: string;
  injector: Injector = ServiceLocator.injector;
  owner: SkillOwner;
  constructor(owner) {
    this.owner = owner
  }

  protected static replaceName(name): string {
    return name.replace(/skill$/i, '')
  }
}
