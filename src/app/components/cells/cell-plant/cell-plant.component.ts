import { Component, OnInit } from '@angular/core';

import { CellComponent } from '../../cell/cell.component';

@Component({
  selector: 'cell-plant',
  templateUrl: '../../cell/cell.component.html',
  styleUrls: ['../../cell/cell.component.css', 'cell-plant.component.css']
})
export class CellPlantComponent extends CellComponent implements OnInit {
  type = 'plant';
  constructor() {
    super();
    this.x = 30;
    this.y = 5;
  }

  ngOnInit() {
  }

}
