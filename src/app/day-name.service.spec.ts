import { TestBed } from '@angular/core/testing';

import { DayNameService } from './day-name.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DayNameService', () => {
  let service: DayNameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(DayNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
