import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  constructor() {}

  isDarkMode: boolean = true;
  title: string = 'clock';
  time: Date = new Date();
  ngOnInit(): void {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  get FormattedTime() {
    const hours: number = this.time.getHours();
    const min: number = this.time.getMinutes();
    return { hours, min };
  }
}
