import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { TabsComponent } from './tabs/tabs';
import { APP_CONFIG, AppConfig } from './app.config';
import { CRUDBpmnService } from './services/crud-bpmn.service'
import { CRUDPlanItemService } from './services/crud-plan-item.service';
import {DiscussThreadsService} from './services/discuss-threads.service';
import { DiscussMessageListComponent } from './discuss-message-list/discuss-message-list.component';
import { DiscussThreadListComponent } from './discuss-thread-list/discuss-thread-list.component';
import { CaseParticipantListComponent } from './case-participant-list/case-participant-list.component';
import { DiscussThreadSectionComponent } from './discuss-thread-section/discuss-thread-section.component';
import { DiscussMessageSectionComponent } from './discuss-message-section/discuss-message-section.component'


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
    BrowserAnimationsModule,
    MaterializeModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }, CRUDBpmnService, CRUDPlanItemService, DiscussThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
