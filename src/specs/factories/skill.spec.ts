import { ServiceLocator } from '../../app/services/service-locator.service';
import { Skill } from '../../app/factories/skill';

class SkillChild extends Skill {}
ServiceLocator.injector = ({get: () => {}});

describe('Skill', () => {
  const instance = (...args) => {
    if (!this._instance) { this._instance = new SkillChild(args[0] || {}); }
    return this._instance;
  };
  afterEach(() => this._instance = null);
  describe('.constructor', () => {
    it('should has injector', () => {
      expect(instance().injector).toBe(ServiceLocator.injector);
    });

    it('should has owner as given parameter on constructor', () => {
      const owner = {name: 'qwe'};
      expect(instance(owner).owner).toBe(owner);
    });
  });

  describe('.replaceName', () => {
    it('should return name of class but without "skill" word', () => {
    });
  });

  describe('#name', () => {
    it('should call .replaceName', () => {
      const spy = spyOn(Skill, 'replaceName');
      instance().name;
      expect(spy).toHaveBeenCalledWith('SkillChild');
    });
  });
});
