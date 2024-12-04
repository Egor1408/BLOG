import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient = inject(HttpClient);

  constructor() { }

  signup(body: {email: string, password: string}) {
    return this.http.post('http://localhost:3000/signup', body, {headers: {'Content-Type': 'application/json'}})
      .subscribe((res) => res);
  }

  signin(body: {email: string, password: string}) {
    return this.http.post('http://localhost:3000/signin', body, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
    .subscribe((res) => {
      console.log(res);
    })
  }
}
