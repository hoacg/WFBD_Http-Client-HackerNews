import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];
  message: string;
  isLoading = false;
  loadingMessage = "Đang chờ...";

  constructor(private httpClient: HttpClient) {
    this.getNewsFromAPI();
  }

  getNewsFromAPI() {
    this.isLoading = true;
    let interval = setInterval(() => {
      this.loadingMessage += '.';
    }, 500);
    this.httpClient
      .get<Article[]>('http://localhost:8000/news')
      .subscribe( (newsItems) => {
      this.articles = newsItems;
        this.isLoading = false;
        clearInterval(interval);
    }, error => {
        this.message = 'Gặp lỗi khi lấy danh sách bài viết từ HackerNewss';
        this.isLoading = false;
        clearInterval(interval);
      });
  }

  showArticleContent(event) {
    alert(event);
  }

}
