import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {

  private baseUrl = 'http://localhost:8225/api/user/register'
  
  constructor(private http: HttpClient) {  }

  public doRegistration(user){
    return this.http.post(`${this.baseUrl}`, user);
  }
}
