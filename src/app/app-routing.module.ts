import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAirlineDetailsComponent } from './create-airline-details/create-airline-details.component';
import { DisplayAllAirlineDetailsComponent } from './display-all-airline-details/display-all-airline-details.component';
import { DisplayAirlineDetailsComponent } from './display-airline-details/display-airline-details.component';
import { UpdateAirlineDetailsComponent } from './update-airline-details/update-airline-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGaurdService} from './auth-gaurd.service';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';

const routes: Routes = [
  {path: 'create-airline-details', component: CreateAirlineDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'airlineDetails', component:DisplayAllAirlineDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'display-airline-details/:airlineId', component: DisplayAirlineDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'update-airline-details/:airlineId', component: UpdateAirlineDetailsComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'home-page', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'profile-card', component: ProfilecardComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'ticket-booking/:airlineId',component:TicketBookingComponent,canActivate:[AuthGaurdService]}

  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
