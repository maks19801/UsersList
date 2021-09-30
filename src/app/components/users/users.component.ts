import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showUsersList: boolean = false;

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Maks Porsh',
        username: 'maks',
        email: 'maks@gmail.com',
        hide: true,
        registered: new Date(),
      },
      {
        id: 2,
        name: 'John Doe',
        username: 'john',
        email: 'john@gmail.com',
        hide: true,
        registered: new Date()
      },
      {
        id: 3,
        name: 'Kevin Johnson',
        username: 'kevin',
        email: 'kevin@gmail.com',
        hide: true,
        registered: new Date(),
      },
    ];
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  ngOnInit(): void {

  }
}
