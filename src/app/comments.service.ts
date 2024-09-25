import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: any[] = [];
  constructor(private httpClient: HttpClient) { }
  getall(blogId: any) {
    return this.httpClient.get('http://localhost:3030/thread/' + blogId);
  }

  add(comment: any) {
    return this.httpClient.post('http://localhost:3030/thread', comment);
  }

  delete(id: any) {
    return this.httpClient.delete('http://localhost:3030/thread/' + id);
  }
}
