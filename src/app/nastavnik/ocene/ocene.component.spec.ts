import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceneComponent } from './ocene.component';

describe('OceneComponent', () => {
  let component: OceneComponent;
  let fixture: ComponentFixture<OceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
