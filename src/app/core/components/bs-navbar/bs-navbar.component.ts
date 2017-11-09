import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  
  public manilaTimeZone: any;
  public newYorkTimeZone: any;

  constructor(
    private router: Router) {
  }

  async ngOnInit() {
    this.manilaTimeZone = moment().tz('Asia/Manila').format();
    this.newYorkTimeZone = moment().tz('America/New_York').format();

    console.log(this.manilaTimeZone);
    console.log(this.newYorkTimeZone);
  }

  logout() {
    // this.auth.logout();
  }

}
