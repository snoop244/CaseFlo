import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import {Action, StoreModule} from '@ngrx/store';
import * as _ from 'lodash';

import { TabsComponent } from './tabs/tabs';
import { APP_CONFIG, AppConfig } from './app.config';
import { CRUDBpmnService } from './services/crud-bpmn.service';
import { CRUDPlanItemService } from './services/crud-plan-item.service';
import {DiscussThreadsService} from './services/discuss-threads.service';
import { DiscussMessageListComponent } from './discuss-message-list/discuss-message-list.component';
import { DiscussThreadListComponent } from './discuss-thread-list/discuss-thread-list.component';
import { CaseParticipantListComponent } from './case-participant-list/case-participant-list.component';
import { DiscussThreadSectionComponent } from './discuss-thread-section/discuss-thread-section.component';
import { DiscussMessageSectionComponent } from './discuss-message-section/discuss-message-section.component';
import {ApplicationState, INITIAL_APPLICATION_STATE} from './store/application-state';
import {LOAD_PARTICIPANT_THREADS_ACTION, LoadParticipantThreadsAction} from './store/actions';

// reducer takes the current state and an action and returns a the new state
function storeReducer(state: ApplicationState, action: Action): ApplicationState {

  switch (action.type) {
    case LOAD_PARTICIPANT_THREADS_ACTION:
      return handleLoadParticipantThreadsAction(state, action);

    default:
      return state;
  }
}

// REFERENCE: this is tough. See this lesson:
// https://angular-university.io/lesson/angular-ngrx-writing-our-first-reducer-function-step-by-step
// and for a summary of the whole thing:
// https://angular-university.io/lesson/angular-ngrx-summary-of-how-a-store%2C-actions-and-reducers-work
function handleLoadParticipantThreadsAction(state: ApplicationState, action: LoadParticipantThreadsAction): ApplicationState {
    const participantData = action.payload;
    // NOTE: reducer should not directly modify state.  Uses a copy of state via Object.assign().
    const newState: ApplicationState = Object.assign({}, state);
    newState.storeData = {
      discussionParticipants: _.keyBy(action.payload.participants, 'id'), // keyBy because we need a map, not an array here.
      discussionMessages: _.keyBy(action.payload.messages, 'id'),
      discussionThreadsPerParticipant: _.keyBy(action.payload.threads, 'id')

    };
    return newState;
}

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    DiscussMessageListComponent,
    DiscussThreadListComponent,
    CaseParticipantListComponent,
    DiscussThreadSectionComponent,
    DiscussMessageSectionComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterializeModule,
    // FIXME: registering reducers: https://github.com/ngrx/platform/blob/master/MIGRATION.md#registering-reducers
    StoreModule.forRoot(storeReducer, {initialState: INITIAL_APPLICATION_STATE})
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }, CRUDBpmnService, CRUDPlanItemService, DiscussThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
