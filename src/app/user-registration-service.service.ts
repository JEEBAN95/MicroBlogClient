import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {

  constructor(private http: HttpClient) { 
   
  }

  public doRegistration(user){
    return this.http.post("http://localhost:8225/api/user/register", user, {responseType: "text" as "json"});
  }
}
