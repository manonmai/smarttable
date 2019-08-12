import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployyesComponent } from './employyes.component';

describe('EmployyesComponent', () => {
  let component: EmployyesComponent;
  let fixture: ComponentFixture<EmployyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
