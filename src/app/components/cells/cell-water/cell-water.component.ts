import { Component, OnInit, Input } from '@angular/core';

import { CellWater } from '../../../factories/cells/cell-water';

import { CellComponent } from '../../cell/cell.component';


@Component({
  selector: 'cell-water',
  templateUrl: '../../cell/cell.component.html',
  styleUrls: ['../../cell/cell.component.css', 'cell-water.component.css']
})
export class CellWaterComponent extends CellComponent implements OnInit {
  @Input() cell: CellWater;

  type: string = 'water';
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
