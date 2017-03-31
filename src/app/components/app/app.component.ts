import { Component } from '@angular/core';

import { StarterService } from '../../services/starter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Evolution';
  starter: StarterService;
  constructor(starter: StarterService) {
    this.starter = starter;
  }
}
