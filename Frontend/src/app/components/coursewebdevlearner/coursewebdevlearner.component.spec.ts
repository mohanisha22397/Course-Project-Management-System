import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewebdevlearnerComponent } from './coursewebdevlearner.component';

describe('CoursewebdevlearnerComponent', () => {
  let component: CoursewebdevlearnerComponent;
  let fixture: ComponentFixture<CoursewebdevlearnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursewebdevlearnerComponent]
    });
    fixture = TestBed.createComponent(CoursewebdevlearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
