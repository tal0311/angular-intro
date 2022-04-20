import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// MODELS
import { User } from './../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() user!: User;
  @Output() closeModal = new EventEmitter();

  ngOnInit(): void {}

  back() {
    this.closeModal.emit(null);
  }
}
