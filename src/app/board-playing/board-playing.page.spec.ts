import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPlayingPage } from './board-playing.page';

describe('BoardPlayingPage', () => {
  let component: BoardPlayingPage;
  let fixture: ComponentFixture<BoardPlayingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPlayingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPlayingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
