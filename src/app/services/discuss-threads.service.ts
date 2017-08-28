import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";  // FIXME can't use this to return an Observable.  Needed older HTTP
import {Http} from "@angular/http";
import {APP_CONFIG, IAppConfig} from "../app.config";
import {Observable} from "rxjs/Observable";
import {AllParticipantDiscussData} from "../discuss-model/discuss-dto";

@Injectable()
export class DiscussThreadsService {

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) { }

  getParticipantThreads(): Observable<AllParticipantDiscussData> {
    // FIXME per the course, this is getting threads by participant. Consider threads by PlanItem.
    const uri: string = this.config.apiEndpoint + '/REST/threads';
    return this.http.get(uri).map(res => res.json()); // FIXME try swapping out HTTP with newer HTTPClient. Struggled with Observable.

  }
  // TODO stopped here: https://angular-university.io/lesson/angular-ngrx-store-concepts-introduction

}
