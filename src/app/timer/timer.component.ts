import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  constructor() {}
  @Output() done = new EventEmitter<any>();

  future: number = Date.now() + 59;
  present: number = Date.now();
  countdown: number = 59;
  intervalId: any = null;
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.future--;
      this.countdown = this.future - this.present;
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  get time() {
    if (this.countdown === 55) {
      this.due();
      clearInterval(this.intervalId);
    }
    return this.countdown;
  }
  due() {
    this.done.emit('Due');
  }
}
