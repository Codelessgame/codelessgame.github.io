import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './pages/home/home.component';
import {BlogListingComponent} from "./pages/blog/blog-listing/blog-listing.component";
import {BlogPostComponent} from "./pages/blog/blog-post/blog-post.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogListingComponent},
  {path: 'blog/:id', component: BlogPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

