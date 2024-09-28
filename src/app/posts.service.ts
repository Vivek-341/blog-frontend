import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface post {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  posts: post[] = [];

  constructor(private httpClient: HttpClient) { }

  add(post:any ) {
    const postJson = JSON.stringify(post);
    console.log("this is post" + postJson);
    this.httpClient.post('https://blog-mongodb-lac.vercel.app//blog', postJson, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((data:any) => {
      console.log(data);
    });
  }

  delete(id: any) {
    return this.httpClient.delete('https://blog-mongodb-lac.vercel.app//blog/'+id);
  }
  edit(post:any) {
    const postJson = JSON.stringify(post);
    console.log(post.id);
    console.log("this is post" + postJson);
    this.httpClient.put('https://blog-mongodb-lac.vercel.app//blog/'+post._id, postJson, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((data:any) => {
      console.log(data);
    });
  }
  get(id: number) {
    return this.httpClient.get('https://blog-mongodb-lac.vercel.app//blog/'+id);
  }
  getAll(){
    return this.httpClient.get('https://blog-mongodb-lac.vercel.app//blog');
    /*.subscribe((data:any) => {
      
      this.posts = data;
      console.log(this.posts);
    })
    return this.posts;*/
  }


}
