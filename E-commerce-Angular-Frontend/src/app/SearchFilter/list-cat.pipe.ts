import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from '../models/categorie';

@Pipe({
  name: 'listCat',
})
export class ListCatPipe implements PipeTransform {
  transform(categories: Categorie[], searchCat: string): Categorie[] {
    if (!categories || !searchCat) {
      return categories;
    }
    return categories.filter((categorie) =>
      categorie.nomcategorie
        .toLocaleLowerCase()
        .includes(searchCat.toLocaleLowerCase())
    );
  }
}
