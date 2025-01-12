import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from "../news-list/news-list.component";
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [CommonModule, NewsListComponent, LoadingComponent],
  providers: [NewsService],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.scss'
})
export class LatestComponent {

  public newsService = inject(NewsService);
  public articles$ = this.newsService.getLatest();  
}
