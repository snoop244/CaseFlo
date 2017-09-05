import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {APP_CONFIG, IAppConfig} from '../app.config';
import {Observable} from 'rxjs/Observable';
import {AllParticipantDiscussData} from '../discuss-model/discuss-dto';
import * as _ from 'lodash';
import 'rxjs/Rx'; // FIXME import specific operators here, not all 50+


@Injectable()
export class DiscussThreadsService {

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) { }

  getParticipantThreads(): Observable<AllParticipantDiscussData> {
    // TODO for details on leveraging HTTPClient, see: http://blog.angular-university.io/angular-http/
    const uri: string = this.config.apiEndpoint + '/REST/threads';
    return this.http
      .get(uri)
      .map(res => res.json());
  }
  // TODO 1: research and move reducers to a reducer map
  // TODO 2: create a single API call on the backend to grab AllParticipantDiscuss data

}
