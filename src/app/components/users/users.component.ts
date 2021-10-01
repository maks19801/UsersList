import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users!: User[];
  hide: boolean = true;
  showUsersList: boolean = false;

  constructor(private readonly service: UsersService) {}

  loadUsers() {
    var users$ = this.service.getUsers();
    users$.pipe(
      tap(_ => console.log(`showing ${_.length} users`))
    ).subscribe(result => this.users = result);
  }
  toggleHide(user: User) {
    user.hide = !user.hide;

  }

  joined(user: User) {
    user.registered = new Date();
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  addUser(newUser: User) {
    this.service.addUser(newUser).subscribe(() => {
      this.users = [newUser, ...this.users];
    })
  }

  removeUser(id:number) {
    this.service.removeUser(id).subscribe(() => {
      this.users = this.users.filter(t => t.id !== id);
    },
    () => {
      console.log('remove failed');
    });
  }

  editUser(id:number, newName: string): void {
    const changedUser = this.findUser(id);
    changedUser!.name = newName;
    this.service.editUser(id, changedUser!).subscribe();
  }
  private findUser(id: number): User|undefined {
     return this.users.find(t => t.id === id);
  }
}
