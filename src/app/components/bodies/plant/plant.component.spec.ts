import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plant } from '../../../factories/bodies/alive/plant';

import { CellPlantComponent } from '../../cells/cell-plant/cell-plant.component';
import { PlantComponent } from './plant.component';

describe('PlantComponent', () => {
  let component: PlantComponent;
  let fixture: ComponentFixture<PlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlantComponent,
        CellPlantComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantComponent);
    component = fixture.componentInstance;
    component.plant = <Plant>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
