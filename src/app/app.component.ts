import {Component} from '@angular/core';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public remaining:any = {};

  ngOnInit() {
    this.updateRemaining();
    setInterval(this.updateRemaining.bind(this), 1000);
  }

  updateRemaining() {

    const target = moment('2016-09-15');
    const now = moment();
    const delta = moment.duration(target.diff(now));

    this.remaining = {
      months: delta.months(),
      days: delta.days(),
      hours: delta.hours(),
      minutes: delta.minutes(),
      seconds: delta.seconds()
    }


  }
}
