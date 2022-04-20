import { User } from './../../models/user.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
})
export class UserPreviewComponent implements OnInit {
  @Input() user!: User;
  @Output() remove = new EventEmitter();
  @Output() setUser = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  userActions(userId: string, action: string) {
    switch (action) {
      case 'REMOVE':
        console.log('remove user:', userId);
        this.remove.emit(userId);
        break;

      case 'SET_CURR':
        console.log('setCurr user:', userId);
        this.setUser.emit(userId);
        break;
    }
  }
}
