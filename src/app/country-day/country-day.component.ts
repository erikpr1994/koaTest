import { Component, Input, OnInit } from '@angular/core';

export interface CountryDay {
  countryName: string;
  date: string;
  names: Array<string>;
}

@Component({
  selector: 'country-day',
  templateUrl: './country-day.component.html',
  styleUrls: ['./country-day.component.css'],
})
export class CountryDayComponent implements OnInit {
  @Input() countryDay: CountryDay | undefined;

  constructor() {}

  ngOnInit(): void {}
}
