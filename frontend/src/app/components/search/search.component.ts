import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { Article } from '../../types/article';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from '../news-list/news-list.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NewsListComponent, LoadingComponent],
  providers: [NewsService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  public newsService = inject(NewsService);

  public searchForm = new FormGroup({
    searchControl: new FormControl('', [Validators.required])
  });

  public articles$: Observable<Array<Article>>;

  public search() {
    this.articles$ = this.newsService.getArticles(this.searchForm.value.searchControl!);
  }
}
