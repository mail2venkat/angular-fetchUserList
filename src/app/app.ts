import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('fetchUsers');

  name = 'Angular ';
  users: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.users = data;
      console.log(typeof data);
      console.log(this.users);
    });
  }
}
