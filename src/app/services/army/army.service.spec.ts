import { TestBed } from '@angular/core/testing';

import { ArmyService } from './army.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('ArmyService', () => {
  let service: ArmyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    service = TestBed.inject(ArmyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
