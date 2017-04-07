import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellPlant } from '../../../factories/cells/cell-plant';

import { CellPlantComponent } from './cell-plant.component';

describe('CellPlantComponent', () => {
  let component: CellPlantComponent;
  let fixture: ComponentFixture<CellPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellPlantComponent);
    component = fixture.componentInstance;
    component.cell = <CellPlant>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
