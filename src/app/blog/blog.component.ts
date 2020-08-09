import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../Blog'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog : Blog;
  resp : any;
  message : string
  email : string
  constructor(private blogService : BlogService) { 
  }

  ngOnInit(): void {
    this.blog = new Blog("","");
  }

  public submitBlog(){
    console.log(this.blog)
    let resps = this.blogService.saveBlog(this.blog, this.email);
    resps.subscribe((data)=>this.resp = data);
    this.message = "success"
  }
}
