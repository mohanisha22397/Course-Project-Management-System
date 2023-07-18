import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectroboticsComponent } from './projectrobotics.component';

describe('ProjectroboticsComponent', () => {
  let component: ProjectroboticsComponent;
  let fixture: ComponentFixture<ProjectroboticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectroboticsComponent]
    });
    fixture = TestBed.createComponent(ProjectroboticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
