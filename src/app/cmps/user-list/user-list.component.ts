import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [
    {
      id: 'u101',
      username: 'Tal',
      favorites: [
        {
          showName: 'some show',
          showDsc:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sed nemo. Beatae voluptatum impedit dolor!',
        },
        {
          showName: 'some show',
          showDsc:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sed nemo. Beatae voluptatum impedit dolor!',
        },
      ],
      color: '#0284af',
    },
    {
      id: 'u102',
      username: 'Shiran',
      favorites: [
        {
          showName: 'some show',
          showDsc:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sed nemo. Beatae voluptatum impedit dolor!',
        },
        {
          showName: 'some show',
          showDsc:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sed nemo. Beatae voluptatum impedit dolor!',
        },
      ],
      color: '#d0b400',
    },
    {
      id: 'u103',
      username: 'Guy',
      favorites: [
        {
          showName: 'some show',
          showDsc:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sed nemo. Beatae voluptatum impedit dolor!',
        },
        {
          showName: 'some show',
          showDsc:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sed nemo. Beatae voluptatum impedit dolor!',
        },
      ],
      color: '#ac00bf',
    },
  ];
  currUser: User | null = null;
  ngOnInit(): void {}

  removeUser(userId: string) {
    console.log('remove user:', userId);
    const users = this.users.filter((user) => user.id !== userId);
    this.users = [...users];
  }
  setCurrUser(userId: string | null) {
    if (!userId) {
      this.currUser = null;
      return;
    }
    const user = this.users.find((user) => user.id === userId);
    this.currUser = JSON.parse(JSON.stringify(user));
  }
  addUser() {
    const username = prompt('Enter user name');

    const user = {
      id: new Date().getTime().toString(),
      username,
      favorites: [],
      color: this.getRandomColor(),
    };

    this.users = [...this.users, JSON.parse(JSON.stringify(user))];
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
