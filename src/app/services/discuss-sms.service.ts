import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG, IAppConfig} from "../app.config";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class DiscussSmsService {

  results: string[];

  constructor( @Inject(APP_CONFIG) private config: IAppConfig, private http: HttpClient) {
    // You can use config.apiEndpoint now
  }
  sendSMS() {
    // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const uri: string = this.config.apiEndpoint + "REST/sendSMS/"; // set the full api endpoint
    const params = new HttpParams()
      .set( 'smsMessage', 'Hi from Angular')
      .set('toPhoneNumber', '+16476545876');
    return this.http
      .get(uri, {params} )  // NOTE: needed this to be a get. Post didn't work with parameters and is used for objects I think.
      .subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
        console.log("sent sms" + this.results);
      });
    // not sure how to return a subscribe - or how to consume it on the other end??
  }

}
