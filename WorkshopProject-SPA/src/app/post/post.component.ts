import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[] = [];
  
  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    }, error => {
      console.log(error);
    });
  }
}
