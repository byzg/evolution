import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
