import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursemachinelearningComponent } from './coursemachinelearning.component';

describe('CoursemachinelearningComponent', () => {
  let component: CoursemachinelearningComponent;
  let fixture: ComponentFixture<CoursemachinelearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursemachinelearningComponent]
    });
    fixture = TestBed.createComponent(CoursemachinelearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
