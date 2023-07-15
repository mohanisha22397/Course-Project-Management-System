import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseandroidlearnerComponent } from './courseandroidlearner.component';

describe('CourseandroidlearnerComponent', () => {
  let component: CourseandroidlearnerComponent;
  let fixture: ComponentFixture<CourseandroidlearnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseandroidlearnerComponent]
    });
    fixture = TestBed.createComponent(CourseandroidlearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
