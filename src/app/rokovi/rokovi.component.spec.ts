import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RokoviComponent } from './rokovi.component';

describe('RokoviComponent', () => {
  let component: RokoviComponent;
  let fixture: ComponentFixture<RokoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RokoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RokoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
