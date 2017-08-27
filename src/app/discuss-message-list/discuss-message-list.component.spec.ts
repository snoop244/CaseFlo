import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussMessageListComponent } from './discuss-message-list.component';

describe('DiscussMessageListComponent', () => {
  let component: DiscussMessageListComponent;
  let fixture: ComponentFixture<DiscussMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
