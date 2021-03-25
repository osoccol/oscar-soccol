import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OscoComponent } from './osco.component';

describe('OscoComponent', () => {
  let component: OscoComponent;
  let fixture: ComponentFixture<OscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
