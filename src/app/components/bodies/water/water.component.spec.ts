import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Water } from '../../../factories/bodies/inanimate/water';

import { CellWaterComponent } from '../../cells/cell-water/cell-water.component';
import { WaterComponent } from './water.component';

describe('WaterComponent', () => {
  let component: WaterComponent;
  let fixture: ComponentFixture<WaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CellWaterComponent,
        WaterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterComponent);
    component = fixture.componentInstance;
    component.water = <Water>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
