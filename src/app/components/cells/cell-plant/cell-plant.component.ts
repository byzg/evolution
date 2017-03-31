import { Component, OnInit, Input } from '@angular/core';

import { CellPlant } from '../../../factories/cells/cell-plant';

import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-cell-plant',
  templateUrl: '../cell/cell.component.html',
  styleUrls: ['../cell/cell.component.css', 'cell-plant.component.css']
})
export class CellPlantComponent extends CellComponent implements OnInit {
  @Input() cell: CellPlant;

  type: string = 'plant';
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
