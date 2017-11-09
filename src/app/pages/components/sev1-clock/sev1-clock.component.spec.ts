import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sev1ClockComponent } from './sev1-clock.component';

describe('Sev1ClockComponent', () => {
  let component: Sev1ClockComponent;
  let fixture: ComponentFixture<Sev1ClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sev1ClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sev1ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
