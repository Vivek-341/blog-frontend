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
    this.httpClient.post('http://localhost:3030/blog', postJson, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((data:any) => {
      console.log(data);
    });
  }

  delete(id: any) {
    return this.httpClient.delete('http://localhost:3030/blog/'+id);
  }
  edit(post:any) {
    const postJson = JSON.stringify(post);
    console.log("this is post" + postJson);
    this.httpClient.put('http://localhost:3030/blog', postJson, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((data:any) => {
      console.log(data);
    });
  }
  get(id: number) {
    return this.httpClient.get('http://localhost:3030/blog/'+id);
  }
  getAll(){
    return this.httpClient.get('http://localhost:3030/blog');
    /*.subscribe((data:any) => {
      
      this.posts = data;
      console.log(this.posts);
    })
    return this.posts;*/
  }


}
