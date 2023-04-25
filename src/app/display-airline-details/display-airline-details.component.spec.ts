import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAirlineDetailsComponent } from './display-airline-details.component';

describe('DisplayAirlineDetailsComponent', () => {
  let component: DisplayAirlineDetailsComponent;
  let fixture: ComponentFixture<DisplayAirlineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAirlineDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAirlineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
