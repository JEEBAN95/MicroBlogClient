import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  email : string

  private baseUrl = 'http://localhost:8225/api/blog/'
  public get value() : string {
    return 
  }

  constructor(private http:HttpClient) { }

  public saveBlog(blog){
    return this.http.post(`${this.baseUrl+"saveblog"}/${this.email}`,blog );
  }

  public loadBlog(){
    return this.http.get(`${this.baseUrl+"readblogs"}/${this.email}`);
  }
}
