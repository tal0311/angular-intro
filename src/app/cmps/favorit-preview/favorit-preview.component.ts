import { Favorite } from './../../models/favorite.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorit-preview',
  templateUrl: './favorit-preview.component.html',
  styleUrls: ['./favorit-preview.component.scss'],
})
export class FavoritPreviewComponent implements OnInit {
  @Input() show!: Favorite;
  constructor() {}

  ngOnInit(): void {}
}
