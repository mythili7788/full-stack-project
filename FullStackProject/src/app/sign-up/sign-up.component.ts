import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  uname = '' ; 
psw ='';
  
constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
goToLogin(){
  this.router.navigate(['/login']);

  
}
Register(){
  if(this.uname === '' || this.psw === '' ){
    var status = confirm("It is mandatory to fill all the fields");
  }
  else{
  var status = confirm("Successfully Register");
  if(status==true){
    this.router.navigate(['login']);
  }
}
}

}
