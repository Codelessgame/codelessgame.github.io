import { Injectable } from '@angular/core';
import {BlogPostData} from "./blogpostdata";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: BlogPostData[] = [
    {id: 1, date:"2024-02-28", side: "right", color: "light", title: 'Ichep 2024', image:'assets/Ichep_1.jpg', content: 'Making a piece of art for a science conference',},
    {id: 2, date:"2023-05-21", side: "right", color: "light", title: 'Trip to a fusion reactor', image:'assets/tokamak.jpg', content: 'On the 31st of June I with a group of people set out within a school action "TPV" (week of practical education), when we got there we were briefed how this amateur reactor works and could even start it ourselves'},
    {id: 3, date:"2024-03-18", side: "right", color: "light", title: 'Nuclear days', image:'assets/code_img.jpg', content: 'test', },
    {id: 4, date:"2023-06-14", side: "right", color: "light", title: 'Nobel`s institute', image:'assets/nobeluv_institut.jpg', content: 'test'},
    {id: 5, date:"2023-06-04", side: "right", color: "light", title: 'Art camp 2023', image:'assets/art_course.jpg', content: 'Summer 2023 I was part of a art camp',},
    {id: 6, date:"2024-03-09", side: "right", color: "light", title: 'App Decibel', image:'assets/fanda.svg', content: 'This is an application programed by me and my brother as a joke to a friend the sounds were edited by me the working app can be found here https://decibel.bronaruzicka.cz/.', link:"https://decibel.bronaruzicka.cz/."},
    {id: 7, date:"2024-03-18", side: "right", color: "dark", title: 'Physics brawl', image:'assets/soutez_001.jpg', content: 'I participated in physics competition Physics brawl in a team of 5 people Adam Baborák, Benjamin Hejda, Jindřich Boula , Huu Duy Nguyen. ' + 'More info about the competition:', link:"https://fyziklani.org/teams"},
  ]

  getAllPosts(): BlogPostData[] {
    return this.posts;
  }

  getPost(id: number): BlogPostData | undefined {
    return this.posts.find(post => post.id == id);
  }

}
