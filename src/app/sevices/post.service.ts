import { Post } from "../models/post";

export class PostService{
    // je rempli le tableau des valeurs 
    // TODO : enregister dans base de donnee et ajouter la section ajouter post 
    // le mieux et qu'il soit dans la meme page 
    stringLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu laoreet nulla.  Quisque rutrum neque a tincidunt imperdiet. Fusce mattis suscipit velit. Vivamus mollis, nibh nec blandit facilisis, dolor magna faucibus mauris, ';
  arrayListPost : Post[]=[
    new Post('Mon premier post', this.stringLorem,13,9),
    new Post('Mon deuxieme post', this.stringLorem,678,128),
    new Post('Mon troisieme post', this.stringLorem,9,11),
    new Post('Mon quatrieme post', this.stringLorem,15,15)
  ];

  // les methodes
  like(i:number){
      this.arrayListPost[i].loveIts += 1;
  }
  dislike(i:number){
      this.arrayListPost[i].dontLoveIts += 1;
  }
}