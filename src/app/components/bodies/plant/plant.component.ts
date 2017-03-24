import { Component, OnInit, Input } from '@angular/core';

// import { Plant } from '../../factories/bodies//plant';

@Component({
  selector: 'plant',
  templateUrl: 'plant.component.html',
  styleUrls: ['plant.component.css']
})
export class PlantComponent implements OnInit {
  // @Input() plant: Plant;
  plant = {
    cells: [{x: 5, y: 15}]
  };

  constructor() { }

  ngOnInit() {
  }

}
