import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussThreadSectionComponent } from './discuss-thread-section.component';

describe('DiscussThreadSectionComponent', () => {
  let component: DiscussThreadSectionComponent;
  let fixture: ComponentFixture<DiscussThreadSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussThreadSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussThreadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
