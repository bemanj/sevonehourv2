import { ConfigService } from './../config/config.service';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

  private _url: string;

    constructor(private http: Http, private configService: ConfigService) {
      this._url = configService.getApiURI();
    }

    getAll() {
      console.log();
    return this.http.get(this._url + 'WallBoardValues/')
     .do(this.logResponse)
     .map((res: Response) => res.json());
    }

    // return this.http.get(this._url + 'WallBoardValues/')
    //  .do(this.logResponse)
    //  .map((res: Response) => res.json());
    }


    // getAll(a, b, c) {
    //   console.log(b);
    //   // api/IncidentTables/{id}?title={title}&name={name}
    // return this.http.get(this._url + 'IncidentTables/' + a + '?title=' + b + '&name=' + c )
    //  .do(this.logResponse)
    //  .map((res: Response) => res.json());
    // }

    private logResponse(res: Response) {
      console.log(res);
    }

}
