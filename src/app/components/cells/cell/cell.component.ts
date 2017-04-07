import { Component, OnInit } from '@angular/core';

import { CellPlant } from '../../../factories/cells/cell-plant';
import { CellWater } from '../../../factories/cells/cell-water';

@Component({
  selector: 'cell',
  templateUrl: 'cell.component.html',
  styleUrls: ['cell.component.css']
})
export class CellComponent implements OnInit {
  x: number;
  y: number;
  type: string;
  cell: CellPlant | CellWater;
  constructor() {}

  ngOnInit() {
  }

}
