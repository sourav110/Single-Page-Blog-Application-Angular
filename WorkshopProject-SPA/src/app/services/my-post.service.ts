import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyPost } from '../models/myPost';

@Injectable({
  providedIn: 'root'
})
export class MyPostService {

  constructor(private http: HttpClient) { }

  getMyPosts() {
    return this.http.get<MyPost[]>('http://localhost:5000/api/myposts');
  }
}
