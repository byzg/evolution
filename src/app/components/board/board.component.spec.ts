import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardService } from '../../services/board.service';

import { Waters } from '../../collections/inanimate/waters';
import { Plants } from '../../collections/alive/plants';

import { BoardComponent } from './board.component';

class StubClass {}

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: BoardService, useClass: StubClass},

        Waters,
        Plants
      ],
      declarations: [ BoardComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('contructor', () => {
    it('should have DI services and collections', () => {
      expect(component['board']).toEqual(jasmine.any(StubClass));
      expect(component['waters']).toEqual(jasmine.any(Waters));
      expect(component['plants']).toEqual(jasmine.any(Plants));
    });

    it('should get width and hight from board service instance', () => {
      expect(component.width).toEqual(component['board'].WIDTH);
      expect(component.height).toEqual(component['board'].HEIGHT);
    });
  });
});
