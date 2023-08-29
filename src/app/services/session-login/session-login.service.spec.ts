import { TestBed } from '@angular/core/testing';

import { SessionLoginService } from './session-login.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('SessionLoginService', () => {
  let service: SessionLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    service = TestBed.inject(SessionLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
