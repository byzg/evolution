import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: 'cell.component.html',
  styleUrls: ['cell.component.css']
})
export class CellComponent implements OnInit {
  x: number;
  y: number;
  constructor() {}

  ngOnInit() {
  }

}