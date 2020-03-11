import { Component, OnInit } from '@angular/core';
import { MyPostService } from '../services/my-post.service';
import { MyPost } from '../models/myPost';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {

  constructor(private myPostService: MyPostService) { }

  myPosts: MyPost[] = [];

  ngOnInit() {
    this.myPostService.getMyPosts().subscribe(data => {
      this.myPosts = data;
    }, error => {
      console.log(error);
    });
  }
}
