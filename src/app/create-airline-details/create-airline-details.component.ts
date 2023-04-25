import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-airline-details',
  templateUrl: './create-airline-details.component.html',
  styleUrls: ['./create-airline-details.component.css']
})
export class CreateAirlineDetailsComponent implements OnInit {
  airline: Airline = new Airline();
  constructor(private airlineService: AirlineService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAirline() {
    this.airlineService.saveAirlineDetails(this.airline).subscribe(data => {
      console.log(data);
      this.goToAirlineList();
    },
      error => console.log(error));
  }

  goToAirlineList() {
    this.router.navigate(['/airlineDetails']);
  }

  onSubmit() {
    console.log(this.airline);
    this.saveAirline();
  }
}

