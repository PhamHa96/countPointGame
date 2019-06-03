import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLeaderPage } from './choose-leader.page';

describe('ChooseLeaderPage', () => {
  let component: ChooseLeaderPage;
  let fixture: ComponentFixture<ChooseLeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
