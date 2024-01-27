import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../blog.service";
import {BlogPostData} from "../blogpostdata";

@Component({
  selector: 'app-blogpost',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

  activatedRoute = inject(ActivatedRoute);
  blogService = inject(BlogService);

  blogPostData?: BlogPostData = undefined;

  getLeftRight(): any {
    return this.blogPostData?.side ?? "right"
  }

  constructor() {
    const blogPostId = this.activatedRoute.snapshot.params["id"];
    this.blogPostData = this.blogService.getPost(blogPostId);
  }


}
