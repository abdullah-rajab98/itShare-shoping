import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any = [];

  constructor(private httpClient: HttpClient) {
  }

  url: string = 'https://jsonplaceholder.typicode.com/posts';

  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe((response) => {
      console.log(response);
      this.posts = response;
    })
  }

  createPost(input: any) {
    let post = { title: input, id: "" }
    this.httpClient.post(this.url, JSON.stringify(post)).subscribe((response) => {
      this.posts.splice(0, 0, post)
    })
  }
}
