import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

interface user{
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: user[] = [];

  constructor(private httpClient: HttpClient) { }

  add(user:any ) {
    const userJson = JSON.stringify(user);
    this.httpClient.post('http://localhost:3030/user', userJson, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((data:any) => {
    });
  }
  
}
