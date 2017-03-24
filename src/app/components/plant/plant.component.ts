import { Component, OnInit, Input } from '@angular/core';

import { Plant } from '../../factories/bodies/alive/plant';

@Component({
  selector: 'plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  @Input() plant: Plant;

  constructor() { }

  ngOnInit() {
  }

}
