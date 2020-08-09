import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {path:"", redirectTo:"register",pathMatch:"full"},
  {path:"register", component:UserRegistrationComponent},
  {path:"blog", component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
