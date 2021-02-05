import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentiComponent } from './studenti.component';

describe('StudentiComponent', () => {
  let component: StudentiComponent;
  let fixture: ComponentFixture<StudentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
