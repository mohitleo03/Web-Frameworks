import { TestBed } from '@angular/core/testing';

import { RListService } from './r-list.service';

describe('RListService', () => {
  let service: RListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
