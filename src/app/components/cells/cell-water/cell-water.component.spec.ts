import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellWater } from '../../../factories/cells/cell-water';

import { CellWaterComponent } from './cell-water.component';

describe('CellWaterComponent', () => {
  let component: CellWaterComponent;
  let fixture: ComponentFixture<CellWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellWaterComponent);
    component = fixture.componentInstance;
    component.cell = <CellWater>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
