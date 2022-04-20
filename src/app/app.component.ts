import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'anguar-basics';

  dueTime(str: string) {
    // console.log('App cmp says:', str);
  }
}
