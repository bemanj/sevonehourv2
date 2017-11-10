import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment-timezone';

@Component({
    selector: 'regionalTime',
    templateUrl: './regional.time.component.html'
})
export class RegionalTimeComponent implements OnInit {

    @Input() timeZone: string;

    public hours: string;
    public minutes: string;
    public seconds: string;
    public timeZoneDate: Date;

    constructor() {

    }

    //   this.manilaTimeZone = moment().tz('Asia/Manila').format();
    //   this.newYorkTimeZone = moment().tz('America/New_York').format();

    //   console.log(this.manilaTimeZone);
    //   console.log(this.newYorkTimeZone);
    async ngOnInit() {

        let tick = Observable.timer(0, 1000);
        tick.subscribe(() => {
            this.timeZoneDate = new Date(moment().tz(this.timeZone).format());
            
        })


        //this.manilaTimeZone = moment().tz('Asia/Manila').format();
        // this.newYorkTimeZone = moment().tz('America/New_York').format();

        // console.log(this.manilaTimeZone);
        // console.log(this.newYorkTimeZone);
    }


}
