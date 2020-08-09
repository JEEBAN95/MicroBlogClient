import { Component, OnInit } from '@angular/core';

import { UserRegistrationServiceService } from '../user-registration-service.service';
import { User } from '../User';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user : User
  resp : any
 

  constructor(private service : UserRegistrationServiceService) { }

  ngOnInit(): void {
    this.user =new User("","")
  }

  public register(){
    let resps= this.service.doRegistration(this.user);
    resps.subscribe((data)=>this.resp = data);
  }
}
