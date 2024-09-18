import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(user:any ) {
    const userJson = JSON.stringify(user);
    // this.httpClient.post('http://localhost:3030/login', userJson, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((data:any) => {
    //   console.log(data);
    //   console.log(data[0].name)
    //   localStorage.setItem("userName",data[0].name);
    // });
    return this.httpClient.post('http://localhost:3030/login', userJson, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }
}
