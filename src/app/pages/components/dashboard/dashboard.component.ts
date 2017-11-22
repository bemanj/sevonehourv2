import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data/data.service';
import { WallboardData } from '../../../shared/models/WallboardData';
import { TempWallBoardData } from '../../../shared/models/TempWallBoardData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

public tempWallboarData: TempWallBoardData[] = [];

constructor(private fetchdata: DataService) { }

  ngOnInit() {

    this.fetchdata.getAll()
    .subscribe(d => {
      d.forEach((data: WallboardData) => {
            this.tempWallboarData.push(
             new TempWallBoardData(
                data.Incident_Number,
               this.SecondsRemain(data.Start_Date),
               this.ConvertUTCDateToLocalDate(new Date(data.Start_Date))
              , data.Title
              , data.Incident_Number
              , data.TechOp_Bridge
              , data.IMTech_Lead
              , data.Summary));
      });
      console.log(this.tempWallboarData);
    });

  }

private SecondsRemain(startdate: Date) {

      const hourInSeconds = 3600;
      const startDateFromDB: any = this.ConvertUTCDateToLocalDate(new Date(startdate));
      const currentGMTDate: any = new Date();
      const diffInSeconds = (Date.parse(currentGMTDate) - Date.parse(startDateFromDB)) / 1000;

      return  hourInSeconds - diffInSeconds;
    }

private ConvertUTCDateToLocalDate(da: Date) {

      const newDate = new Date(da.getTime() + da.getTimezoneOffset() * 60 * 1000);
      const offset = da.getTimezoneOffset() / 60;
      const hours = da.getHours();
      newDate.setHours(hours - offset);

      return newDate;
      }
}
