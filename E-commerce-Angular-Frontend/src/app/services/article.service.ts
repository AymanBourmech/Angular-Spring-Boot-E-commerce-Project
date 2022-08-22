import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  url = environment.baseUrl + 'articles';
  constructor(private http: HttpClient) {}
  getarticles = (): Observable<Article[]> => {
    return this.http.get<Article[]>(this.url + '/');
  };
  AddArticle = (cat: Article): Observable<Article> => {
    return this.http.post<Article>(this.url + '/', cat);
  };
  GetArticleById(id: object): Observable<Article> {
    return this.http.get<Article>(this.url + '/' + id);
  }
  UpdateArticle(id: object, cat: Article): Observable<Article> {
    return this.http.put<Article>(this.url + '/' + id, cat);
  }
  DeleteArticle(id: object): Observable<Article> {
    return this.http.delete<Article>(this.url + '/' + id);
  }
}
