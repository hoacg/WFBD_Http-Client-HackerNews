import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import * as news from './data/news.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[] = news.default;
  message: string;
  isLoading = false;
  loadingMessage = "Đang chờ...";

  constructor(private httpClient: HttpClient) {
    this.getNewsFromAPI();
    console.log(news);
  }

  getNewsFromAPI() {
    this.isLoading = true;
    let interval = setInterval(() => {
      this.loadingMessage += '.';
    }, 500);
    this.httpClient
      .get<Article[]>('https://api.hnpwa.com/v0/news/1.json')
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

  createNews() {
    const article: Article = {
      title: 'Abc Xyz',
      url: 'http://codegym.vn/blogs/huong-dan-angular'
    }
    this.httpClient.post('https://api.hnpwa.com/v0/news', article).subscribe( (result) => {
      console.log('Thêm bài viết thành công');
    }, (error) => {
      console.log('Gặp lỗi khi thêm bài viết');
      console.error(error);
    });
  }

  showArticleContent(event) {
    alert(event);
  }
}
