import {NgModule} from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { WallboardComponent } from './pages/components/wallboard/wallboard.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    PagesModule,
    ChartsModule,
    CoreModule,
    RouterModule.forRoot([
       { path: '', component: WallboardComponent },
       { path: 'dashboard', component: DashboardComponent },
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

