import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { CustomFormsModule } from 'ng2-validation';

import { ConfigService } from './services/config/config.service';
import { DataService } from './services/data/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    HttpModule,
    DateTimePickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    HttpModule,
    DateTimePickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot().ngModule,
  ],
  providers: [
    ConfigService,
    DataService,
  ]
})
export class SharedModule { }
