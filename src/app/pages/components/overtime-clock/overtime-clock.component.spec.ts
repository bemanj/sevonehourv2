import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeClockComponent } from './overtime-clock.component';

describe('OvertimeClockComponent', () => {
  let component: OvertimeClockComponent;
  let fixture: ComponentFixture<OvertimeClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertimeClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
