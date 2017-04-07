import { Component } from '@angular/core';

import { BoardService } from '../../services/board.service';
import { Waters } from '../../collections/inanimate/waters';
import { Plants } from '../../collections/alive/plants';

@Component({
  selector: 'board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css']
})
export class BoardComponent {
  width: Number = this.board.WIDTH;
  height: Number = this.board.HEIGHT;

  constructor(
    protected board: BoardService,
    protected waters: Waters,
    protected plants: Plants
  ) { }
}
