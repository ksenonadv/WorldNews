import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import { Article } from "../types/article";

@Injectable()
export class NewsService {
  
  private http = inject(
    HttpClient
  );

  private API_URL = environment.apiUrl;

  public getLatest() {
    return this.http.get<Array<Article>>(`${this.API_URL}latest`);
  }

  public getArticles(keyword: string) {
    return this.http.post<Array<Article>>(`${this.API_URL}search`, { keyword });
  }
}