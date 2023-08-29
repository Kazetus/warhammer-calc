import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderComponent } from './builder.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('BuilderComponent', () => {
  let component: BuilderComponent;
  let fixture: ComponentFixture<BuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(BuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
