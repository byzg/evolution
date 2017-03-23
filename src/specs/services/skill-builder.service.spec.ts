import { TestBed, inject } from '@angular/core/testing';

import { SkillBuilder } from '../../app/services/skill-builder.service';

describe('SkillBuilder', () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [SkillBuilder]
  //   });
  // });

  it('should ...', inject([SkillBuilder], (service: SkillBuilder) => {
    expect(service).toBeTruthy();
  }));
});
