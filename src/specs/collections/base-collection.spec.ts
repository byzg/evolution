import * as _ from 'lodash';
import { TestBed, inject } from '@angular/core/testing';

import { BaseCollection } from '../../app/collections/base-collection';

class StubBodyClass {}

describe('BaseCollection', () => {
  const localInject = (fn) => inject([BaseCollection], (service: BaseCollection<any>) => { fn(service); });
  beforeEach(() => {
    BaseCollection['bodyClass'] = StubBodyClass;
    TestBed.configureTestingModule({
      providers: [BaseCollection]
    });
  });

  describe('.constructor', () => {
    it('should raise if there is no bodyClass', () => {
      BaseCollection['bodyClass'] = null;
      expect(() => { new BaseCollection(); }).toThrow();
    });
  });

  describe('#push', () => {
    it('should set bodyClass if it is still empty', localInject((service) => {
      service.push();
      expect(service.bodyClass).toEqual(StubBodyClass);
    }));

    it('should push given element', localInject((service) => {
      service.push(73);
      expect(service.includes(73)).toBe(true);
    }));

    it('should push new instance of bodyClass if pushing element is not given', localInject((service) => {
      service.push();
      expect(service[0].constructor).toEqual(StubBodyClass);
    }));

    it('should return length of itself', localInject((service) => {
      expect(service.push()).toEqual(1);
    }));
  });

  describe('#tick', () => {
    it('should call tick for each element of collection', localInject((service) => {
      spyOn(_, 'invokeMap');
      service.tick();
      expect(_.invokeMap).toHaveBeenCalledWith(service, 'tick');
    }));
  });
});
