import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDayComponent } from './country-day.component';

const COUNTRY_DAY_MOCK = {
  countryName: 'string',
  date: new Date().toLocaleDateString(),
  names: ['Erik'],
};

const COUNTRY_DAY_MOCK_2 = {
  countryName: 'string',
  date: new Date().toLocaleDateString(),
  names: ['Erik', 'Cris'],
};

describe('CountryDayComponent', () => {
  let component: CountryDayComponent;
  let fixture: ComponentFixture<CountryDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryDayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDayComponent);
    component = fixture.componentInstance;
    component.countryDay = COUNTRY_DAY_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the country', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain(COUNTRY_DAY_MOCK.countryName);
  });

  it(`icon doesn't exists when only one name`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-icon')).toBeFalsy();
  });

  it('icon exists when more than one name exists', () => {
    component.countryDay = COUNTRY_DAY_MOCK_2;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-icon')).toBeTruthy();
  });
});
