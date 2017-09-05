import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from '../app.config';
import {DiscussThreadsService} from '../services/discuss-threads.service';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../store/application-state';
import {LoadParticipantThreadsAction} from "../store/actions";


@Component({
  selector: 'discuss-thread-section',
  templateUrl: './discuss-thread-section.component.html',
  styleUrls: ['./discuss-thread-section.component.css']
})
export class DiscussThreadSectionComponent implements OnInit {

  constructor (private discussThreadService: DiscussThreadsService,
               private store: Store<ApplicationState>) {

    store.subscribe(
      state => console.log('thread section received a new state', state) // will log the value of each application state
    );
  }

  ngOnInit() {

    this.discussThreadService.getParticipantThreads() // 1. Calls the backend for all the data.
      .subscribe(
        allParticipantDiscussData => this.store.dispatch( // 2. Dispatches action to update store
                new LoadParticipantThreadsAction(allParticipantDiscussData) // 3. This action is of type LOAD_PARTICIPANT_THREADS_ACTION
        ) // see: src/app/store/actions.ts:8 for that type definition.
      ); // 4. This, in turn, triggers the storeReducer handleLoadParticipantThreadsAction(), with the above-noted action.type
    // 5. The reducer informs all components that have a store.subscribe of the change.
  }

}
