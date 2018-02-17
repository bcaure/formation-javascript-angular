import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersGrid2Component } from './characters-grid-2.component';

describe('CharactersGrid2Component', () => {
  let component: CharactersGrid2Component;
  let fixture: ComponentFixture<CharactersGrid2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersGrid2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
