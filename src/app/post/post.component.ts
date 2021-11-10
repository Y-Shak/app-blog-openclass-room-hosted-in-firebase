import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../sevices/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post :Post;
  @Input() index :number;
  
  constructor(private postService : PostService){}

  onLike(i:number){
    this.postService.like(i);
  }
  
  onDisLike(i:number){
    this.postService.dislike(i);
  }

  getIfLikesStatement(i:number):string{
    let postTemp =this.postService.arrayListPost[i];
    if(postTemp.loveIts > postTemp.dontLoveIts){
      return   'likesMore'
    }else if(postTemp.loveIts != postTemp.dontLoveIts){
      return  'dislikesMore';
    }
    
  }

  

}
