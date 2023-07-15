import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincoursesComponent } from './admincourses.component';

describe('AdmincoursesComponent', () => {
  let component: AdmincoursesComponent;
  let fixture: ComponentFixture<AdmincoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincoursesComponent]
    });
    fixture = TestBed.createComponent(AdmincoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
