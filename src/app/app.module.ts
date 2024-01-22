import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MyWorkComponent} from './layouts/my-work/my-work.component';
import {TwoColumnComponent} from './layouts/two-column/two-column.component';
import {NgOptimizedImage} from "@angular/common";
import {IBComponent} from './com/ib/ib.component';
import {MyWorkCardsComponent} from './layouts/my-work-cards/my-work-cards.component';
import {BlogComponent} from './pages/blog/blog.component';

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
    IBComponent
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
