import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scategorie } from '../models/scategorie';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScategoriesService {
  url = environment.baseUrl + 'scategories';
  constructor(private http: HttpClient) {}
  getScategories = (): Observable<Scategorie[]> => {
    return this.http.get<Scategorie[]>(this.url + '/');
  };
  AddScategorie = (cat: Scategorie): Observable<Scategorie> => {
    return this.http.post<Scategorie>(this.url + '/', cat);
  };
  GetScategorieById(id: object): Observable<Scategorie> {
    return this.http.get<Scategorie>(this.url + '/' + id);
  }
  GetScategorieByCat(Cat: object): Observable<Scategorie[]> {
    return this.http.get<Scategorie[]>(this.url + '/cat/' + Cat);
  }
  UpdateScategorie(id: object, cat: Scategorie): Observable<Scategorie> {
    return this.http.put<Scategorie>(this.url + '/' + id, cat);
  }
  DeleteScategorie(id: object): Observable<Scategorie> {
    return this.http.delete<Scategorie>(this.url + '/' + id);
  }
}
