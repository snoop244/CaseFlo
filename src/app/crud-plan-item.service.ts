import { Injectable, Inject } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, } from '@angular/common/http'; //NOTE this import is not covered in: https://angular.io/guide/http
import { APP_CONFIG, IAppConfig } from './app.config';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CRUDPlanItemService {

  results: string[];

  constructor( @Inject(APP_CONFIG) private config: IAppConfig, private http: HttpClient) {
    // You can use config.apiEndpoint now
  }
  //For HttpClient module, see: https://angular.io/guide/http
  manuallyCompleteHumanTask(caseExecutionId: string) {
    // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let uri: string = this.config.apiEndpoint + "planItem/humanTaskComplete/"; //set the full api endpoint
    return this.http
      .post(uri, caseExecutionId)
      .subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
        console.log("manuallyCompletedTask returned the following results: " + this.results)
      })
    //not sure how to return a subscribe - or how to consume it on the other end??
  }

}


