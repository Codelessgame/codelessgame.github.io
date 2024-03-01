import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../blog.service";
import {BlogPostData} from "../blog-post-data";
import {distinctUntilChanged, map, Observable} from "rxjs";

@Component({
  selector: 'app-blogpost',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

  id$: Observable<number> = this.activatedRoute.params
    .pipe(
      map(params => parseInt(params["id"])),
      distinctUntilChanged()
    );

  post$: Observable<BlogPostData | undefined> = this.blogService.getPost(this.id$)

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
  ) { }

}
