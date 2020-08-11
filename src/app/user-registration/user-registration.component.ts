import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistrationServiceService } from '../user-registration-service.service';
import { User } from '../User';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user : User
  resp : any

  constructor(private service : UserRegistrationServiceService, private blogService: BlogService,  
    private router : Router) { }

  ngOnInit(): void {
    this.user =new User();
  }

  public register(){
    let resps= this.service.doRegistration(this.user);
    resps.subscribe((data)=>this.resp = data);
  }

  public loadBlogPage(email : string){
    this.blogService.email = email;
    this.router.navigate(["blog",email])
  }
}
