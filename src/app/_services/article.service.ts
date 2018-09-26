import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../_models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }

  postArticle(article : Article){
    return this.http.post('http://localhost:53833/api/Articles',article);
  }

  getAllArticle(){
    return this.http.get('http://localhost:53833/api/Articles');
  }

}
