// post: {  
// ,  
// ,  
// ,  
// 
// } 

export class Post{
    constructor(public title: string = '', 
                public content: string = '', 
                public loveIts: number = 0, 
                public dontLoveIts: number = 0, 
                public created_at: Date =new Date()){}
}