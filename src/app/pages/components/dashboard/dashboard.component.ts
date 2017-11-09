import { debug } from 'util';
import { forEach } from '@angular/router/src/utils/collection';
import { TempWallBoardData } from '../../../shared/models/temp-data';
import { date } from 'ng2-validation/dist/date';
import { concat } from 'rxjs/observable/concat';
import { WallboardFetch } from '../../../shared/models/wallboard-fetch';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
wallboarddata: WallboardFetch[] = [];
tempwallboardata: TempWallBoardData[] = [];
public remainingSeconds: number;
// incidents$: {};
incidentNumber;
elapseTime;

  constructor(private fetchdata: DataService) {
              }

  ngOnInit() {
    // const myid = 1;

    // const data = {
    //   Id: myid,
    //   Title: 'CEO',
    //   Name: 'John Doe',
    // };
// debugger;
    // const hourInSeconds = 3600;
    // const startDateFromDB: any = new Date(2017, 10, 8, 21, 0, 0, 0).toUTCString();
    // const currentGMTDate: any = new Date().toUTCString(); /*localtime that need to be convert to UTC*/
    // const diffInSeconds = (Date.parse(currentGMTDate) - Date.parse(startDateFromDB)) / 1000;
    // this.remainingSeconds = hourInSeconds - diffInSeconds;

    this.fetchdata.getAll().subscribe(d => {
      this.wallboarddata = d;
      d.forEach((data: WallboardFetch) => {
            this.tempwallboardata.push(
             new TempWallBoardData(
               data.$id, data.Incident_Number,
               this.SecondsRemain(data.Start_Date),
               this.convertUTCDateToLocalDate(new Date(data.Start_Date)))
             );
      });
      console.log(this.tempwallboardata);
    });


  // this.fetchdata.getAll(myid, data.Title, data.Name).subscribe(d => {
  //   console.log(d);
  // });
  }
 SecondsRemain(startdate: Date) {
// debugger
// new Date(startdate).toUTCString(); // new Date(2017, 10, 8, 21, 0, 0, 0).toUTCString();// UTC for removal

      const hourInSeconds = 3600;
      const startDateFromDB: any = this.convertUTCDateToLocalDate(new Date(startdate));
      const currentGMTDate: any = new Date();
      const diffInSeconds = (Date.parse(currentGMTDate) - Date.parse(startDateFromDB)) / 1000;
      return  hourInSeconds - diffInSeconds;

    }
  
      convertUTCDateToLocalDate(da: Date) {
      // debugger
      const newDate = new Date(da.getTime() + da.getTimezoneOffset() * 60 * 1000);
      const offset = da.getTimezoneOffset() / 60;
      const hours = da.getHours();

      newDate.setHours(hours - offset);
      return newDate;
        
      }
}
