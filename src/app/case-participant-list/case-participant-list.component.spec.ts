import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseParticipantListComponent } from './case-participant-list.component';

describe('DiscussUserListComponent', () => {
  let component: CaseParticipantListComponent;
  let fixture: ComponentFixture<CaseParticipantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseParticipantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseParticipantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
