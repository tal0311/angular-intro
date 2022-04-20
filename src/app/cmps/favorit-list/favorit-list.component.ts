import { Favorite } from './../../models/favorite.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorit-list',
  templateUrl: './favorit-list.component.html',
  styleUrls: ['./favorit-list.component.scss'],
})
export class FavoritListComponent implements OnInit {
  @Input() favorites: Favorite | any;

  constructor() {}

  ngOnInit(): void {}
}
