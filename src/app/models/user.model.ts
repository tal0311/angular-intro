import { Favorite } from './favorite.model';
export interface User {
  id: string;
  username: string;
  favorites?: Favorite[];
  color:string
}
