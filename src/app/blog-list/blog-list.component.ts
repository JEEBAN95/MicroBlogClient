import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogNameList : any

  constructor(private blogServce : BlogService) {}

  ngOnInit(): void {
    let response = this.blogServce.loadBlog();
    response.subscribe((data)=>this.blogNameList=data);
  }

  public getBlogs(){
   
  }
}
