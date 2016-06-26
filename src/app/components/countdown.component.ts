import * as moment from 'moment';
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'countdown',
  template: ` <h1>
  {{remaining.months}} mois {{remaining.days}} jours {{remaining.hours}} heures
  {{remaining.minutes}} minutes {{remaining.seconds}} secondes
</h1>
`
})
export class CountDownComponent {
  public remaining:any = {};

  private date:string;

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.router
      .routerState
      .queryParams
      .subscribe(params => {
        this.date = params['date'];
        console.log(this.date);
        this.updateRemaining();
        setInterval(this.updateRemaining.bind(this), 1000);
      });
  }

  updateRemaining() {
    const target = moment(this.date);
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
