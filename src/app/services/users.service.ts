import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private readonly client: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.client
      .get<User[]>(this.url)
      .pipe(tap((_) => console.log(`loaded ${_.length} users`)));
  }

  addUser(newUser: User): Observable<{}> {
    return this.client.post(this.url, newUser);
  }

  removeUser(id: number): Observable<{}> {
    return this.client.delete(`${this.url}/${id}`);
  }
  editUser(id: number, changedUser: User): Observable<{}> {
    return this.client.put<{}>(`${this.url}/${id}`, changedUser);
  }
}
