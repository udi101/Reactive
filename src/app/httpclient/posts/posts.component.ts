import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  name: string;
  posts: Array<{ name: string, username: string }>;
  constructor(
    private postsService: PostsService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((posts: Array<{ name: string, username: string }>) => { this.posts = posts; });
    this.ar.data.subscribe((x: any) => {
      this.name = x.name;
    });
  }

}
