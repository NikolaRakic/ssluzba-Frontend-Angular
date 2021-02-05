import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenjivanjeComponent } from './ocenjivanje.component';

describe('OcenjivanjeComponent', () => {
  let component: OcenjivanjeComponent;
  let fixture: ComponentFixture<OcenjivanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcenjivanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcenjivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
