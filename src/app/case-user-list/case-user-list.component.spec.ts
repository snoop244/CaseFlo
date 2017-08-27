import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussUserListComponent } from './case-user-list.component';

describe('DiscussUserListComponent', () => {
  let component: DiscussUserListComponent;
  let fixture: ComponentFixture<DiscussUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
