import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';


const routes: Routes = [
  {path:"", redirectTo:"register",pathMatch:"full"},
  {path:"register", component:UserRegistrationComponent},
  {path:"blog/:email", component:BlogComponent},
  {path: "blog-list", component : BlogListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
