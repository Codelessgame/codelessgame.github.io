import { Injectable } from '@angular/core';
import {BlogPostData} from "./blogpostdata";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: BlogPostData[] = [
    {id: 1, title: 'Ichep 2024', image:'assets/Ichep_1.jpg', content: 'test', side: "right"},
    {id: 2, title: 'Trip to a fusion reactor', image:'assets/tokamak.jpg', content: '' +
        'On the 31st of June I with a group of people set out within a school action " " ' +
        '', side: "left"},
    {id: 3, title: 'Jaderne dny', image:'assets/code_img.jpg', content: 'test', side: "right"},
    {id: 4, title: 'Nobeluv institut', image:'assets/nobeluv_institut.jpg', content: 'test', side: "right"},
    {id: 5, title: 'Vytvarny kurz 2023', image:'assets/art_course.jpg', content: 'test', side: "right"},
  ]

  getAllPosts(): BlogPostData[] {
    return this.posts;
  }

  getPost(id: number): BlogPostData | undefined {
    return this.posts.find(post => post.id == id);
  }

}
