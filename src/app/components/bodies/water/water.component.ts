import { Component, OnInit, Input } from '@angular/core';

import { Water } from '../../../factories/bodies/inanimate/water';

@Component({
  selector: 'app-water',
  templateUrl: 'water.component.html',
  styleUrls: ['water.component.css']
})
export class WaterComponent implements OnInit {
  @Input() water: Water;

  constructor() { }

  ngOnInit() {
  }

}
