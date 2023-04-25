import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAirlineDetailsComponent } from './update-airline-details.component';

describe('UpdateAirlineDetailsComponent', () => {
  let component: UpdateAirlineDetailsComponent;
  let fixture: ComponentFixture<UpdateAirlineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAirlineDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAirlineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
