import { TestBed } from '@angular/core/testing';

import { MonPremierServiceService } from './mon-premier-service.service';

describe('MonPremierServiceService', () => {
  let service: MonPremierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonPremierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
