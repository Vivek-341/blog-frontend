import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: any[] = [];
  constructor(private httpClient: HttpClient) { }
  getall(blogId: any) {
    return this.httpClient.get('https://blog-mongodb-lac.vercel.app//thread/' + blogId);
  }

  add(comment: any) {
    return this.httpClient.post('https://blog-mongodb-lac.vercel.app//thread', comment);
  }

  delete(id: any) {
    console.log("this is id" + id);
    return this.httpClient.delete('https://blog-mongodb-lac.vercel.app//thread/' + id);
  }
}
