import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetiNastavnikComponent } from './predmeti-nastavnik.component';

describe('PredmetiNastavnikComponent', () => {
  let component: PredmetiNastavnikComponent;
  let fixture: ComponentFixture<PredmetiNastavnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetiNastavnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetiNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
