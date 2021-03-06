import * as _ from 'lodash-es';
import { TestBed, inject } from '@angular/core/testing';

import { hardSpyOn } from '../support/spec-helper';
import { BaseCollection } from '../../app/collections/base-collection';

class StubBodyClass {}
class StubOneMoreBodyClass {}

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

    it('should not set bodyClass if it is already given', localInject((service) => {
      service.bodyClass = StubOneMoreBodyClass;
      service.push();
      expect(service.bodyClass).toEqual(StubOneMoreBodyClass);
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
      hardSpyOn(_, 'invokeMap');
      service.tick();
      expect(_.invokeMap).toHaveBeenCalledWith(service, 'tick');
    }));
  });
});
