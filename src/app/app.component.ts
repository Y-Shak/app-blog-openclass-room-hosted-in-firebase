import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { PostService } from './sevices/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private postService : PostService){}
  arrayListPost : Post[];
  ngOnInit(){
    // ici on recupere les infos depuis le service , tableau de post pour notre cas 
    this.arrayListPost = this.postService.arrayListPost;
  }
  
}
