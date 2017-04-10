import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { BoardService } from '../../services/board.service';
import { StarterService } from '../../services/starter.service';

import { Waters } from '../../collections/inanimate/waters';
import { Plants } from '../../collections/alive/plants';

import { AppComponent } from './app.component';
import { BoardComponent } from '../board/board.component';

class StubClass {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: BoardService, useClass: StubClass},
        {provide: StarterService, useClass: StubClass},

        Waters,
        Plants
      ],
      declarations: [
        AppComponent,
        BoardComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  describe('#title', () => {
    it(`should have title 'Evolution'`, async(() => {
      expect(component.title).toEqual('Evolution');
    }));

    it('should render title in a h1 tag', async(() => {
      expect(compiled.querySelector('h1').textContent).toContain('Evolution');
    }));
  });
});
