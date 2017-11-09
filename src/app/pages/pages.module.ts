import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OvertimeClockComponent } from './components/overtime-clock/overtime-clock.component';
import { Sev1ClockComponent } from './components/sev1-clock/sev1-clock.component';
import { WallboardComponent } from './components/wallboard/wallboard.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'dashboard', component: DashboardComponent },
    ])
  ],
  declarations: [
    DashboardComponent,
    WallboardComponent,
    Sev1ClockComponent,
    OvertimeClockComponent,
  ]
})
export class PagesModule {
  constructor() {

  }

}
