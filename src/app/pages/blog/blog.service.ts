import { Injectable } from '@angular/core';
import {BlogTag} from "./blog-tag";
import {BlogPostData} from "./blog-post-data";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {asObservable, MaybeObservable} from "../../../util/MaybeObservable";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly RAW_POSTS: BlogPostData[] = [
    {id: 1, date:"2024-02-28", side: "right", color: "light", tags:[BlogTag.PHYSICS, BlogTag.ART, BlogTag.SCHOOL], title: 'Ichep 2024', image:'assets/Ichep_1.jpg', content: 'Making a piece of art for a science conference',},
    {id: 2, date:"2023-05-21", side: "right", color: "light", tags:[BlogTag.PHYSICS,BlogTag.PROGRAMMING, BlogTag.SCHOOL], title: 'Trip to a fusion reactor', image:'assets/tokamak.jpg', content: 'On the 31st of June I with a group of people set out within a school action "TPV" (week of practical education), when we got there we were briefed how this amateur reactor works and could even start it ourselves'},
    {id: 3, date:"2023-07-18", side: "right", color: "light", tags:[BlogTag.PHYSICS], title: 'Nuclear days', image:'assets/code_img.jpg', content: 'I visited a showcase of nuclear physics focused on nuclear reactors', },
    {id: 4, date:"2023-06-14", side: "right", color: "light", tags:[BlogTag.PHYSICS], title: 'Nobel\'s institute', image:'assets/nobeluv_institut.jpg', content: 'A picture of me in the Nobel\'s library, after a tour, provided by Nobel\'s institute, through Stockholm about the Nobel prizes.'},
    {id: 5, date:"2023-06-04", side: "right", color: "light", tags:[BlogTag.ART], title: 'Art camp 2023', image:'assets/art_course.jpg', content: 'Summer 2023 I was part of an art camp, where I spend a whole week creating art.',},
    {id: 6, date:"2024-03-09", side: "right", color: "light", tags:[BlogTag.PROGRAMMING], title: 'App Decibel', image:'assets/fanda.svg', content: 'This is an application programed by me and my brother as a joke to a friend the sounds were edited by me the working app can be found here:.', link:"https://decibel.bronaruzicka.cz/."},
    {id: 7, date:"2024-03-18", side: "right", color: "dark",  tags:[BlogTag.PHYSICS, BlogTag.SCHOOL], title: 'Physics brawl', image:'assets/soutez_001.jpg', content: 'I participated in physics competition Physics brawl in a team of 5 people Adam Baborák, Benjamin Hejda, Jindřich Boula and Huu Duy Nguyen. ' + 'More info about the competition:', link:"https://fyziklani.org/"},
  ];


  private postsSubject: BehaviorSubject<BlogPostData[]> = new BehaviorSubject<BlogPostData[]>(this.RAW_POSTS)
  readonly posts$: Observable<readonly BlogPostData[]> = this.postsSubject.asObservable()

  private selectionSubject: BehaviorSubject<Set<BlogTag>> = new BehaviorSubject(new Set<BlogTag>)
  readonly selection$: Observable<readonly BlogTag[]> = this.selectionSubject.asObservable()
    .pipe(map(set => [ ...set ]))

  readonly selectedPosts$: Observable<readonly BlogPostData[]> = combineLatest([ this.posts$, this.selection$ ] as const)
    .pipe(
      map(([ posts, selection ]) =>
        [...posts].sort((postA, postB) => {
          const tagsA = postA.tags.filter(tag => selection.includes(tag)).length
          const tagsB = postB.tags.filter(tag => selection.includes(tag)).length
          return tagsB - tagsA;
        })
      )
    );

  // noinspection JSUnusedGlobalSymbols
  updateSelection(newSelection: BlogTag[]) {
    this.selectionSubject.next(new Set(newSelection));
  }

  toggleSelectionTag(tag: BlogTag) {
    let newSelection = new Set(this.selectionSubject.value);

    if (newSelection.has(tag)) {
      newSelection.delete(tag)
    } else {
      newSelection.add(tag)
    }

    this.selectionSubject.next(newSelection);
  }

  getPost(id: MaybeObservable<number>): Observable<BlogPostData | undefined> {
    return combineLatest([ this.posts$, asObservable(id) ] as const)
      .pipe(
        map(([posts, id]) => {
          return posts.find(post => post.id === id)
        })
      )
  }

}



