import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.baseUrl + 'users';
  constructor(private http: HttpClient) {}
  AddUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
  Login(user: User): Observable<User> {
    return this.http.post<User>(this.url + '/signin', user);
  }
}
