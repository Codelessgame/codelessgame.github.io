import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, routes} from "./app-routing.module";
import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MyWorkComponent} from './layouts/IB_learner/my-work.component';
import {TwoColumnComponent} from './layouts/two-column/two-column.component';
import {NgOptimizedImage} from "@angular/common";
import {IBComponent} from './com/ib/ib.component';
import {MyWorkCardsComponent} from './layouts/my-work-cards/my-work-cards.component';
import {BlogComponent} from './pages/blog/blog.component';
import { BlogCardComponent } from './com/blog-card/blog-card.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyWorkComponent,
    TwoColumnComponent,
    MyWorkCardsComponent,
    BlogComponent,
    IBComponent,
    BlogCardComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
