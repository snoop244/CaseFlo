import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../store/application-state';

@Component({
  selector: 'discuss-message-section',
  templateUrl: './discuss-message-section.component.html',
  styleUrls: ['./discuss-message-section.component.css']
})
export class DiscussMessageSectionComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) {

    store.subscribe(
      state => console.log('message section received state', state)
    );
  }

  ngOnInit() {
  }

}
