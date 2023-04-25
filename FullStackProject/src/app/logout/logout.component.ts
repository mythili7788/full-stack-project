import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
  var status=confirm("Are you sure to logout?");
  if(status==true){
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }

 else {
  this.router.navigate(['airlineDetails']);

}
  }
  }