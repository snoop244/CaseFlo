import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import {Action, combineReducers, StoreModule} from '@ngrx/store';
import * as _ from 'lodash';

import { TabsComponent } from './tabs/tabs';
import { APP_CONFIG, AppConfig } from './app.config';
import { CRUDBpmnService } from './services/crud-bpmn.service';
import { CRUDPlanItemService } from './services/crud-plan-item.service';
import {DiscussThreadsService} from './services/discuss-threads.service';
import { DiscussSmsService} from "./services/discuss-sms.service";
import { DiscussMessageListComponent } from './discuss-message-list/discuss-message-list.component';
import { DiscussThreadListComponent } from './discuss-thread-list/discuss-thread-list.component';
import { CaseParticipantListComponent } from './case-participant-list/case-participant-list.component';
import { DiscussThreadSectionComponent } from './discuss-thread-section/discuss-thread-section.component';
import { DiscussMessageSectionComponent } from './discuss-message-section/discuss-message-section.component';
import {ApplicationState, INITIAL_APPLICATION_STATE} from './store/application-state';
import {LOAD_PARTICIPANT_THREADS_ACTION, LoadParticipantThreadsAction} from './store/actions';
import {INITIAL_UI_STATE, UiState} from './store/ui-state';
import {INITIAL_STORE_DATA, StoreData} from './store/store-data';
import {storeData} from "./reducers/storeDataReducer";
import {uiState} from "./reducers/uiStateReducer";
import {reducers} from "./reducers/index";


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
    StoreModule.forRoot(reducers, {initialState: INITIAL_APPLICATION_STATE})
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }, CRUDBpmnService, CRUDPlanItemService, DiscussSmsService, DiscussThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
