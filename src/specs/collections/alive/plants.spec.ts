import { TestBed, inject } from '@angular/core/testing';

import { Plant } from '../../../app/factories/bodies/alive/plant';

import { Plants } from '../../../app/collections/alive/plants';

describe('Plants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Plants]
    });
  });

  it('should ...', inject([Plants], (service: Plants) => {
    expect(service).toBeTruthy();
  }));

  // describe('.bodyClass', () => {
  //   it('should be equal to Plant class', () => {
  //     // console.log(Plants.bodyClass);
  //     // console.log(Plant);
  //     // expect(Plants.bodyClass).toEqual(Plant);
  //   });
  // });
});
