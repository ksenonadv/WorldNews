import { Component, Input } from '@angular/core';
import { Article } from '../../types/article';
import { ArticleComponent } from "../article/article.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'news-list',
  standalone: true,
  imports: [CommonModule, ArticleComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent {

  @Input() 
  public articles: Array<Article>;

}
