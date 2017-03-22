import { Component, OnInit } from '@angular/core';

import { BoardService } from '../../services/board.service';

@Component({
  selector: 'board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css']
})
export class BoardComponent implements OnInit {
  width: Number = this.board.WIDTH;
  height: Number = this.board.HEIGHT;

  constructor(protected board: BoardService) { }

  ngOnInit() {
  }

}
