import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, } from "./app-routing.module";
import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MyWorkComponent} from './layouts/IB_learner/my-work.component';
import {TwoColumnComponent} from './layouts/two-column/two-column.component';
import {NgOptimizedImage} from "@angular/common";
import {IBComponent} from './com/ib/ib.component';
import {MyWorkCardsComponent} from './layouts/my-work-cards/my-work-cards.component';
import { BlogPostComponent } from './pages/blog/blog-post/blog-post.component';
import { BlogListingComponent } from './pages/blog/blog-listing/blog-listing.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyWorkComponent,
    TwoColumnComponent,
    MyWorkCardsComponent,
    IBComponent,
    BlogPostComponent,
    BlogPostComponent,
    BlogListingComponent
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
