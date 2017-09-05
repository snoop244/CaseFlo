import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from '../app.config';
import {DiscussThreadsService} from '../services/discuss-threads.service';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../store/application-state';
import {LoadParticipantThreadsAction} from "../store/actions";

/**
 * Container components know about backend services and the store
 */
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

    this.discussThreadService.getParticipantThreads()
      .subscribe(
        allParticipantDiscussData => this.store.dispatch( // can only use actions to change store
                new LoadParticipantThreadsAction(allParticipantDiscussData)
        )
      );
  }

}
