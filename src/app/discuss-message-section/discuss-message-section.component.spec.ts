import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussMessageSectionComponent } from './discuss-message-section.component';

describe('DiscussMessageSectionComponent', () => {
  let component: DiscussMessageSectionComponent;
  let fixture: ComponentFixture<DiscussMessageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussMessageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussMessageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
