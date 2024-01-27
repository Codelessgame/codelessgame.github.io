import {Component, inject} from '@angular/core';
import {BlogService} from "../blog.service";
import {BlogPostData} from "../blogpostdata";

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.css']
})
export class BlogListingComponent {

  blogService = inject(BlogService);

  blogPostsData: BlogPostData[] = [];

  constructor() {
    this.blogPostsData = this.blogService.getAllPosts()
  }

}
