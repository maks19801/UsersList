import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() id!: number;
  @Input() name!: string;
  @Input() username!: string;
  @Input() hide!: boolean;
  @Input() email!: string;
  @Input() registered: any = new Date();
  @Output() toggle = new EventEmitter();

  toggleUser(): void{
    this.toggle.emit();
  }

  ngOnInit(): void {

  }

}
