import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../models/categorie';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  url = environment.baseUrl + 'categories';
  constructor(private http: HttpClient) {}
  getcategories = (): Observable<Categorie[]> => {
    return this.http.get<Categorie[]>(this.url + '/');
  };
  AddCategorie = (cat: Categorie): Observable<Categorie> => {
    return this.http.post<Categorie>(this.url + '/', cat);
  };
  GetCategorieById(id: object): Observable<Categorie> {
    return this.http.get<Categorie>(this.url + '/' + id);
  }
  UpdateCategorie(id: object, cat: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(this.url + '/' + id, cat);
  }
  DeleteCategorie(id: object): Observable<Categorie> {
    return this.http.delete<Categorie>(this.url + '/' + id);
  }
}
