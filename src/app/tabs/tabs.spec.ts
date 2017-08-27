import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveItemsComponent } from './tabs';

describe('ActiveItemsComponent', () => {
  let component: ActiveItemsComponent;
  let fixture: ComponentFixture<ActiveItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
