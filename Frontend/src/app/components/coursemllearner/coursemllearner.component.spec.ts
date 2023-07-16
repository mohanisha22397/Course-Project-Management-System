import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursemllearnerComponent } from './coursemllearner.component';

describe('CoursemllearnerComponent', () => {
  let component: CoursemllearnerComponent;
  let fixture: ComponentFixture<CoursemllearnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursemllearnerComponent]
    });
    fixture = TestBed.createComponent(CoursemllearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
