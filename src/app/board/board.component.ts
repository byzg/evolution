import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public static readonly WIDTH: Number = 100;
  public static readonly HEIGHT: Number = 20;
  width: Number = BoardComponent.WIDTH;
  height: Number = BoardComponent.HEIGHT;
  constructor() { }

  ngOnInit() {
  }

}
