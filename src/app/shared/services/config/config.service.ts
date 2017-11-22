import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private _apiURI: string;

   constructor() {
    this._apiURI = this._apiURI = 'http://10.24.231.49/webapi/api/';
    //'http://sev1hour-api.azurewebsites.net/api/';
    // this._apiURI = 'http://10.24.231.49/webapi/api/';
    //    this._apiURI = 'http://localhost:51122/api/';
    //    http://10.24.231.49/webapi/api/WallBoardValues
    }

    getApiURI() {
        return this._apiURI;
    }
}
