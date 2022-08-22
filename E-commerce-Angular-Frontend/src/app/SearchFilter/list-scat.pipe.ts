import { Pipe, PipeTransform } from '@angular/core';
import { Scategorie } from '../models/scategorie';

@Pipe({
  name: 'listScat',
})
export class ListScatPipe implements PipeTransform {
  transform(scategories: Scategorie[], searchCat: string): Scategorie[] {
    if (!scategories || !searchCat) {
      return scategories;
    }
    return scategories.filter((scategorie) =>
      scategorie.nomscategorie
        .toLocaleLowerCase()
        .includes(searchCat.toLocaleLowerCase())
    );
  }
}
