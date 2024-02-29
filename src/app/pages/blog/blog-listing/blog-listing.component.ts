import {Component} from '@angular/core';
import {BlogService} from "../blog.service";
import {BlogPostData} from "../blogpostdata";
import {Tag} from "../tag";

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.css']
})
export class BlogListingComponent {

  // blogService = inject(BlogService);

  blogPostsData: BlogPostData[] = [];

  // constructor() {
  //   this.blogPostsData = this.blogService.getAllPosts()
  // }

  constructor(private blogService: BlogService) {
    this.blogPostsData = this.blogService.posts;
  }


  // Method to reorganize posts by tag
  reorganisedByTag(event: MouseEvent, tag: Tag): void {
    this.blogPostsData = this.blogService.reorganizePostsByTag(tag);
    console.log("data", this.blogPostsData);
    event.preventDefault();
    event.stopPropagation();
  }
}

