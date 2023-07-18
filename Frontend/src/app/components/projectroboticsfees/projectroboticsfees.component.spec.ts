import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectroboticsfeesComponent } from './projectroboticsfees.component';

describe('ProjectroboticsfeesComponent', () => {
  let component: ProjectroboticsfeesComponent;
  let fixture: ComponentFixture<ProjectroboticsfeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectroboticsfeesComponent]
    });
    fixture = TestBed.createComponent(ProjectroboticsfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
