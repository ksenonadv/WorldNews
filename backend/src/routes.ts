import { Express, Request, Response } from "express";
import settings from "./config";

export function registerRoutes(app: Express) {
  app.get('/latest', getLatestNews);
  app.post('/search', searchNews);
}

function mapArticle(article: any) {
  return {
    title: article.title,
    description: article.description,
    content: article.content,
    url: article.url,
    image: article.urlToImage,
    publishedAt: article.publishedAt,
    source: article.source.name
  }
}

function forwardRequest(query: string, response: Response) {
  fetch(`${settings.newsApiUrl}/${query}&apiKey=${settings.newsApiKey}`).then((data) => {
    data.json().then((news) => {
      response.json(
        news.articles.map(mapArticle)
      );
    }).catch((error) => {
      response.status(500).json({ 
        error
      });
    });
  }).catch((error) => {
    response.status(500).json({ 
      error 
    });
  });
}

function getLatestNews(_, response: Response) {
  forwardRequest('top-headlines?country=us', response);
}

async function searchNews(req: Request, response: Response) {
  
  const { keyword } = req.body;

  if (!keyword) {
    response.status(400).json({ 
      error: 'Query parameter is required' 
    });
  }

  forwardRequest(`everything?q=${keyword}`, response);
}