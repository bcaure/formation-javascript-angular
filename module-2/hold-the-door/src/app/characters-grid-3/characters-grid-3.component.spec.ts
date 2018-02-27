import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersGrid3Component } from './characters-grid-3.component';

describe('CharactersGrid3Component', () => {
  let component: CharactersGrid3Component;
  let fixture: ComponentFixture<CharactersGrid3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersGrid3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersGrid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
