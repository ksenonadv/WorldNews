import { Component, Input } from '@angular/core';
import { Article } from '../../types/article';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [DatePipe],
  providers: [DatePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input()
  public data: Article;

}
