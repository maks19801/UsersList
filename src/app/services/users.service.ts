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

  getUsers(): Observable<User[]>{
    return this.client.get<User[]>(this.url)
    .pipe(
      tap(_=>console.log(`loaded ${_.length} users`))
    )
  }
}
