import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewebdevComponent } from './coursewebdev.component';

describe('CoursewebdevComponent', () => {
  let component: CoursewebdevComponent;
  let fixture: ComponentFixture<CoursewebdevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursewebdevComponent]
    });
    fixture = TestBed.createComponent(CoursewebdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
