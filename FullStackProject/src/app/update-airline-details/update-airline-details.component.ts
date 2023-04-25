import { Component,OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-update-airline-details',
  templateUrl: './update-airline-details.component.html',
  styleUrls: ['./update-airline-details.component.css']
})
export class UpdateAirlineDetailsComponent implements OnInit{
    airlineId: number = 0;
    airline: Airline = new Airline();
    constructor(private airlineService: AirlineService,
      private route: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      this.airlineId = this.route.snapshot.params['airlineId'];
  
      this.airlineService.showAirlineDetailsById(this.airlineId).subscribe( data => {
        this.airline = data;
      }, error => console.log(error));
    }
  
    onSubmit(){
      this.airlineService.changeAirlineDetails(this.airlineId, this.airline).subscribe( data =>{
        this.goToAirlineList();
      }
      , error => console.log(error));
    }
  
    goToAirlineList(){
      this.router.navigate(['/airlineDetails']);
    }
  }

