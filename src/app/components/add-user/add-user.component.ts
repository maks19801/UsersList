import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  users!: User[];

    showUserForm: boolean = false;

    name = "";
    username = "";
    email = "";

    @Output() add = new EventEmitter<User>();

  addUser() {
    const user: User = {
      id: Math.round(Math.random() * 1000),
      name: this.name,
      username: this.username,
      email: this.email,
      hide: false,
      registered: new Date()
    };
    this.add.emit(user);
  }
  constructor(private readonly service: UsersService) {}

  ngOnInit(): void {}
  onSubmit(e: any) {
    console.log('submited');
  }
}
