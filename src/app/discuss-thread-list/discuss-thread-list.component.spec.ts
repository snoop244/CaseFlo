import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussThreadListComponent } from './discuss-thread-list.component';

describe('DiscussThreadListComponent', () => {
  let component: DiscussThreadListComponent;
  let fixture: ComponentFixture<DiscussThreadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussThreadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussThreadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
