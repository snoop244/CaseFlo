import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from '../app.config';
import {DiscussThreadsService} from '../services/discuss-threads.service';

@Component({
  selector: 'discuss-thread-section',
  templateUrl: './discuss-thread-section.component.html',
  styleUrls: ['./discuss-thread-section.component.css']
})
export class DiscussThreadSectionComponent implements OnInit {

  constructor (private discussThreadService: DiscussThreadsService) { }

  ngOnInit() {

    this.discussThreadService.getParticipantThreads();
    // TODO stopped here: https://angular-university.io/lesson/angular-ngrx-store-concepts-introduction
  }

}
