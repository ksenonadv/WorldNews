import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [CommonModule],
  providers: [NewsService],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.scss'
})
export class LatestComponent {
  public newsService = inject(NewsService);
}
