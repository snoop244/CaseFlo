import { Component, OnInit } from '@angular/core';
import { CRUDPlanItemService } from '../crud-plan-item.service'

@Component({
  selector: 'tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css']
})
export class TabsComponent implements OnInit {

  constructor(private crudPlanItemService: CRUDPlanItemService) { }

  resultString: string = '';

  ngOnInit() {

  }

  // For web event listing, see: https://developer.mozilla.org/en-US/docs/Web/Events
  completeHumanTask(event) {
    const taskId: string = event.currentTarget.attributes.id.value; // temporary for test
    console.log(taskId);
    this.crudPlanItemService.manuallyCompleteHumanTask(taskId); // returns a subscription TODO output to a toast??
  }
}
