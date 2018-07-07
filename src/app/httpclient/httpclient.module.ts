import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { HttpclientRoutingModule } from './httpclient-routing.module';
import { PostsComponent } from './posts/posts.component';
@NgModule({
  imports: [
    HttpclientRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [PostsComponent],
  providers: [PostsService]
})
export class HttpclientModule { }
