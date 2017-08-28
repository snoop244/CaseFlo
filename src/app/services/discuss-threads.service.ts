import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
//import {Http} from "@angular/http";
import {APP_CONFIG, IAppConfig} from "../app.config";
import {Observable} from "rxjs/Observable";
import {AllParticipantDiscussData} from "../discuss-model/discuss-dto";
import * as _ from 'lodash';
import 'rxjs/Rx'; // FIXME import specific operators here, not all 50+


@Injectable()
export class DiscussThreadsService {

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: HttpClient) { }

  getParticipantThreads(): Observable<AllParticipantDiscussData[]> {  // TODO research the array [] notation here. Needed it.
    // for details on leveraging HTTPClient, see: http://blog.angular-university.io/angular-http/
    const uri: string = this.config.apiEndpoint + '/REST/threads';
    return this.http
      .get<AllParticipantDiscussData[]>(uri)
      .map(data => _.values(data)); // need lodash here to map the object to json value
  }
  // TODO stopped here: https://angular-university.io/lesson/angular-ngrx-store-concepts-introduction

}
