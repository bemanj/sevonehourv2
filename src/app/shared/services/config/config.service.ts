import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

   _apiURI: string;

   constructor() {
    this._apiURI = 'http://sev1hour-api.azurewebsites.net/api/';
    // this._apiURI = 'http://10.24.231.49/webapi/api/';
    //    this._apiURI = 'http://localhost:51122/api/';
    //    http://10.24.231.49/webapi/api/WallBoardValues
    }

    getApiURI() {
        return this._apiURI;
    }
}
