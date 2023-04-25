import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllAirlineDetailsComponent } from './display-all-airline-details.component';

describe('DisplayAllAirlineDetailsComponent', () => {
  let component: DisplayAllAirlineDetailsComponent;
  let fixture: ComponentFixture<DisplayAllAirlineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllAirlineDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllAirlineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
