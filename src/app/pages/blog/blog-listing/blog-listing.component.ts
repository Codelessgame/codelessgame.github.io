import {Component} from '@angular/core';
import {BlogService} from "../blog.service";
import {BlogPostData} from "../blog-post-data";
import {BlogTag} from "../blog-tag";
import {Observable} from "rxjs";

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.css']
})
export class BlogListingComponent {

  posts$: Observable<readonly BlogPostData[]> = this.blogService.selectedPosts$;
  selection$: Observable<readonly BlogTag[]> = this.blogService.selection$;

  constructor(
    private blogService: BlogService
  ) { }

  toggleTagged(event: MouseEvent, tag: BlogTag): void {
    event.preventDefault();
    event.stopPropagation();

    this.blogService.toggleSelectionTag(tag);
  }

}

