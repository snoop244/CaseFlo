import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from "angular2-materialize";
import { ActiveItemsComponent } from './active-items/active-items.component';
import { APP_CONFIG, AppConfig } from './app.config';
import { CRUDBpmnService } from './crud-bpmn.service'
import { CRUDPlanItemService } from './crud-plan-item.service'

@NgModule({
  declarations: [
    AppComponent,
    ActiveItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterializeModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }, CRUDBpmnService, CRUDPlanItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
