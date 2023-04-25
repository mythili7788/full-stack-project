import { Component,OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-airline-details',
  templateUrl: './display-airline-details.component.html',
  styleUrls: ['./display-airline-details.component.css']
})
export class DisplayAirlineDetailsComponent implements OnInit {
  airlineId: number = 0; 
  airline: any = [];
  constructor(private route: ActivatedRoute, private airlineService: AirlineService) {}
  
    ngOnInit(): void {
    this.airlineId = this.route.snapshot.params['airlineId'];

    this.airline = new Airline();
    this.airlineService.showAirlineDetailsById(this.airlineId).subscribe( data => {
    this.airline = data;
    
    
  });

  }
}


