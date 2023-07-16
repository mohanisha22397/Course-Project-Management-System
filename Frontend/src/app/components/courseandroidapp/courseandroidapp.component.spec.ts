import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseandroidappComponent } from './courseandroidapp.component';

describe('CourseandroidappComponent', () => {
  let component: CourseandroidappComponent;
  let fixture: ComponentFixture<CourseandroidappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseandroidappComponent]
    });
    fixture = TestBed.createComponent(CourseandroidappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
