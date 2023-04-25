import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Airline } from './airline';
@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  private baseURL = "http://localhost:8080/AirlineReservation/airlineDetails";
  constructor(private httpClient: HttpClient) { }

  saveAirlineDetails(airline: Airline): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, airline);
  }
  showAirlineDetails(): Observable<Airline[]> {
    return this.httpClient.get<Airline[]>(`${this.baseURL}`);
  }
  showAirlineDetailsById(airlineId: number): Observable<Airline> {
    return this.httpClient.get<Airline>(`${this.baseURL}/${airlineId}`);
  }
  changeAirlineDetails(airlineId: number, airline: Airline): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${airlineId}`, airline);
  }
  deleteAirlineDetails(airlineId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${airlineId}`);
  }
  updateDetailsBooked(airlineId: number,airline : Airline) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${airlineId}`, airline);
  }
  deleteAll():Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }
  findByName(name:any): Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}?name=${name}`); 
  }
  findByInternationalFlight(): Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}/InternationalAirLine`);
  }
  findByDomesticFlight(): Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}/DomesticAirLine`);
  }
}
