import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAirlineDetailsComponent } from './create-airline-details.component';

describe('CreateAirlineDetailsComponent', () => {
  let component: CreateAirlineDetailsComponent;
  let fixture: ComponentFixture<CreateAirlineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAirlineDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAirlineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
