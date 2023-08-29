import { TestBed } from '@angular/core/testing';

import { BuilderService } from './builder.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('BuilderServiceService', () => {
  let service: BuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    service = TestBed.inject(BuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
