import { Component } from '@angular/core';

import { DayNameService } from './day-name.service';

import { CountryDay } from './country-day/country-day.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'KoaTest';

  countryDayList: CountryDay[] = [];

  constructor(private dayNameService: DayNameService) {}

  public getDayNames(dateObject: any) {
    const date = new Date(dateObject.value);
    const day = date.getDate();
    const month = date.getMonth();

    this.dayNameService
      .getDayName(day, month)
      .subscribe(
        (dayNames) => (this.countryDayList = this.processData(dayNames, date))
      );
  }

  private processData(data: any, date: Date) {
    const namedays = data.data.namedays;

    const countryDayList: CountryDay[] = [];

    for (const key in namedays) {
      if (namedays[key] !== 'n/a') {
        const names = namedays[key].split(',');
        console.log(names);

        countryDayList.push({
          countryName: key,
          date: date.toLocaleDateString(),
          names,
        });
      }
    }

    return countryDayList;
  }
}
