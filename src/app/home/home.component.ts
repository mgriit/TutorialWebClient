import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article';
import { ArticleService } from '../_services/article.service';
import { first } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  article: Article = new Article();

  ngOnInit() {
    this.articleService.getAllArticle()
      .pipe(first())
      .subscribe(
        data => {
          this.article=data[5];
          console.log(this.article);

        },error=>{
          console.log(error);
        }
      )
  }
}
