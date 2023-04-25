import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAirlineDetailsComponent } from './create-airline-details/create-airline-details.component';
import { UpdateAirlineDetailsComponent } from './update-airline-details/update-airline-details.component';
import { DisplayAllAirlineDetailsComponent } from './display-all-airline-details/display-all-airline-details.component';
import { DisplayAirlineDetailsComponent } from './display-airline-details/display-airline-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAirlineDetailsComponent,
    DisplayAirlineDetailsComponent,
    DisplayAllAirlineDetailsComponent,
    UpdateAirlineDetailsComponent,
    LoginComponent,
    LogoutComponent,
    ProfilecardComponent,
    SignUpComponent,
    AboutUsComponent,
    ForgetPasswordComponent,
    ContactUsComponent,
    FeedbackComponent,
    HomePageComponent,
    TicketBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
