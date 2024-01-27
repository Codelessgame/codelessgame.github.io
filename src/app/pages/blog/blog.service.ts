import { Injectable } from '@angular/core';
import {BlogPostData} from "./blogpostdata";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: BlogPostData[] = [
    {id: 1, title: 'Inquirer', image:'assets/code_img.jpg', content: 'test'},
    {id: 2, title: 'Inquirer', image:'assets/code_img.jpg', content: 'test'},
    {id: 3, title: 'Inquirer', image:'assets/code_img.jpg', content: 'test'},
    {id: 4, title: 'Inquirer', image:'assets/code_img.jpg', content: 'test'},
    {id: 5, title: 'Inquirer', image:'assets/code_img.jpg', content: 'test'},
  ]

  getAllPosts(): BlogPostData[] {
    return this.posts;
  }

  getPost(id: number): BlogPostData | undefined {
    return this.posts.find(post => post.id == id);
  }

}
