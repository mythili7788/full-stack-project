import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit{
  airlineId: number = 0;
  airline: Airline = new Airline();
  constructor(private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router) { }

 
  ngOnInit(): void {
    
    this.airlineId = this.route.snapshot.params['airlineId'];
     this.airlineService.showAirlineDetailsById(this.airlineId).subscribe( data =>{
      this.airline = data;
    }
    , error => console.log(error));
  }
  
  onSubmit(){
    if((this.airline.numberOfSeats != 0)&&(this.airline.calculatedPrice)){
    
      this.airlineService.updateDetailsBooked(this.airlineId, this.airline)
        .subscribe(data => {
          console.log(data);
          alert("Thank You For Booking!....");
          this.router.navigate(['airlineDetails']);
        }
        , error => console.log(error));
      }
      else{
        alert("Please fill the fields");
      }
    }
      calculation(){
        this.airline.seatingCapacity -= this.airline.numberOfSeats;
        this.airline.calculatedPrice = this.airline.numberOfSeats * (this.airline.cost);
      }
  
  }
