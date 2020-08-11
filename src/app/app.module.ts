import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationServiceService } from './user-registration-service.service';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component'

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    BlogComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserRegistrationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
