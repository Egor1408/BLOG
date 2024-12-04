import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userList: any = undefined;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get("http://localhost:3000/users").subscribe({next:(data:any) => this.userList = data});
  }
}
