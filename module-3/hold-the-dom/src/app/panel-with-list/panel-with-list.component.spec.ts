import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelWithListComponent } from './panel-with-list.component';

describe('PanelWithListComponent', () => {
  let component: PanelWithListComponent;
  let fixture: ComponentFixture<PanelWithListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelWithListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelWithListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
