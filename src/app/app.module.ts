import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, } from "./app-routing.module";
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MyWorkComponent} from './layout/IB_learner/my-work.component';
import {TwoColumnComponent} from './layout/two-column/two-column.component';
import {NgOptimizedImage} from "@angular/common";
import {IBComponent} from './layout/ib/ib.component';
import {MyWorkCardsComponent} from './layout/my-work-cards/my-work-cards.component';
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
