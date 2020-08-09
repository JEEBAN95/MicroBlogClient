import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  public saveBlog(blog, email){
    return this.http.post("http://localhost:8225/api/blog/saveblog/"+email,blog, {responseType : "test" as "json"});
  }
}
