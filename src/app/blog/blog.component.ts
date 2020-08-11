import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../blog.service';
import { Blog } from '../Blog'
import { BlogListComponent } from '../blog-list/blog-list.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog : Blog;
  resp : any;
  
  constructor(private blogService : BlogService,  
    private router : Router) {  }

  ngOnInit(): void {
    this.blog = new Blog();
  }

  public submitBlog(){
    let response = this.blogService.saveBlog(this.blog);
    response.subscribe((data)=>this.resp = data);
  }

  public loadBlog(){
    this.router.navigate(["blog-list"]);
  }
}
