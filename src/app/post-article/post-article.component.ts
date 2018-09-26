import { Component, OnInit } from '@angular/core';
import { first } from '../../../node_modules/rxjs/operators';
import { Article } from '../_models/article';
import { ArticleService } from '../_services/article.service';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  article: Article = new Article();


  ngOnInit() {
  }

  onSubmit() {
    this.article.title="Demo Article";

    this.articleService.postArticle(this.article)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },error=>{
          console.log(error);
        }
      )
  }

  onBodyTextEditorKeyUp(textValue) {
    this.article.body = textValue;
  }
}
