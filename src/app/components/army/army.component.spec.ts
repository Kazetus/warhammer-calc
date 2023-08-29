import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyComponent } from './army.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('ArmyComponent', () => {
  let component: ArmyComponent;
  let fixture: ComponentFixture<ArmyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmyComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ArmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
