import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article';

@Pipe({
  name: 'listArt',
})
export class ListArtPipe implements PipeTransform {
  transform(articles: Article[], searchArt: string): Article[] {
    if (!articles || !searchArt) {
      return articles;
    }
    return articles.filter((article) =>
      article.marque.toLocaleLowerCase().includes(searchArt.toLocaleLowerCase())
    );
  }
}
