import { Injector } from '@angular/core';

import { ServiceLocator } from '../services/service-locator.service';

import { Cell } from './cell';
import { Body } from './body';

export interface ISkill {
  name: string;
  desc: string;
}

export type SkillOwner = Cell | Body;

export abstract class Skill {
  readonly desc: string;
  injector: Injector = ServiceLocator.injector;
  owner: SkillOwner;

  static className(): string {
    return this.replaceName(this.name);
  }

  protected static replaceName(name): string {
    return name.replace(/skill$/i, '');
  }
  constructor(owner) {
    this.owner = owner;
  }

  get name(): string {
    return Skill.replaceName(this.constructor.name);
  }
}
