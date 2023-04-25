import { Component ,OnInit} from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-display-all-airline-details',
templateUrl: './display-all-airline-details.component.html',
styleUrls: ['./display-all-airline-details.component.css']
})
export class DisplayAllAirlineDetailsComponent implements OnInit {
airline: Airline[] = [];
airlineName:string='';


constructor(private airlineService: AirlineService,
  private router: Router) { }
  searchByName(){
    this.airlineService.findByName(this.airlineName).subscribe(
      data =>{
        this.airline=data;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

ngOnInit(): void {
  this.getAllAirlineDetails();
}

private getAllAirlineDetails(){
  this.airlineService.showAirlineDetails().subscribe(data => {
    this.airline = data;

    
  });
}
fetchInternationalFlight(){
  this.airlineService.findByInternationalFlight().subscribe(
    data => {
      this.airline = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}
fetchDomesticFlight(){
  this.airlineService.findByDomesticFlight().subscribe(
    data => {
      this.airline = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}
airlineDetailsById(airlineId: number){
  this.router.navigate(['display-airline-details', airlineId]);
}

updateAirlineDetails(airlineId: number){
  this.router.navigate(['update-airline-details', airlineId]);
}

deleteAirlineDetail(airlineId: number){
  var status = confirm("Do you really want to delete this record?");
  if(status == true){
  this.airlineService.deleteAirlineDetails(airlineId).subscribe( data => {
    console.log(data);
    this.getAllAirlineDetails();
   })
  }
  else{
    this.getAllAirlineDetails();

  }
}

bookedDetails(airlineId: number) {
  this.router.navigate(['ticket-booking', airlineId]);

}
removeAllAirlineDetails():void{
  var status = confirm("Alert : Are you sure you want to delete all records?If you click ok then it will remove all records in the DB.");
  if(status == true){
this.airlineService.deleteAll().subscribe(
  data => {
    console.log(data);
  this.getAllAirlineDetails();
  },
  error => {
  console.log(error);
  });
}
else{
  this.getAllAirlineDetails();

}
}
}
