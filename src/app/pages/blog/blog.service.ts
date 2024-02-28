import { Injectable } from '@angular/core';
import {Tag} from "./tag";
import {BlogPostData} from "./blogpostdata";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: BlogPostData[] = [
    {id: 1, date:"2024-02-28", side: "right", color: "light", tags:[Tag.PHYSICS, Tag.ART, Tag.SCHOOL], title: 'Ichep 2024', image:'assets/Ichep_1.jpg', content: 'Making a piece of art for a science conference',},
    {id: 2, date:"2023-05-21", side: "right", color: "light", tags:[Tag.PHYSICS,Tag.PROGRAMMING, Tag.SCHOOL], title: 'Trip to a fusion reactor', image:'assets/tokamak.jpg', content: 'On the 31st of June I with a group of people set out within a school action "TPV" (week of practical education), when we got there we were briefed how this amateur reactor works and could even start it ourselves'},
    {id: 3, date:"2023-07-18", side: "right", color: "light", tags:[Tag.PHYSICS], title: 'Nuclear days', image:'assets/code_img.jpg', content: 'I visited a showcase of nuclear physics focused on nuclear reactors', },
    {id: 4, date:"2023-06-14", side: "right", color: "light", tags:[Tag.PHYSICS], title: 'Nobel`s institute', image:'assets/nobeluv_institut.jpg', content: 'A picture of me in the Nobel`s library, after a tour, provided by nobel`s institute, through Stockholm about the Nobel prizes.'},
    {id: 5, date:"2023-06-04", side: "right", color: "light", tags:[Tag.ART], title: 'Art camp 2023', image:'assets/art_course.jpg', content: 'Summer 2023 I was part of an art camp, where I spend a whole week creating art.',},
    {id: 6, date:"2024-03-09", side: "right", color: "light", tags:[Tag.PROGRAMMING], title: 'App Decibel', image:'assets/fanda.svg', content: 'This is an application programed by me and my brother as a joke to a friend the sounds were edited by me the working app can be found here:.', link:"https://decibel.bronaruzicka.cz/."},
    {id: 7, date:"2024-03-18", side: "right", color: "dark",  tags:[Tag.PHYSICS, Tag.SCHOOL], title: 'Physics brawl', image:'assets/soutez_001.jpg', content: 'I participated in physics competition Physics brawl in a team of 5 people Adam Baborák, Benjamin Hejda, Jindřich Boula and Huu Duy Nguyen. ' + 'More info about the competition:', link:"https://fyziklani.org/"},
  ];

  getAllPosts(): BlogPostData[] {
    return this.posts;
  }

  getPost(id: number): BlogPostData | undefined {
    return this.posts.find(post => post.id == id);
  }

}
