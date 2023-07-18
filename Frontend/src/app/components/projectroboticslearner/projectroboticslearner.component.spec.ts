import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectroboticslearnerComponent } from './projectroboticslearner.component';

describe('ProjectroboticslearnerComponent', () => {
  let component: ProjectroboticslearnerComponent;
  let fixture: ComponentFixture<ProjectroboticslearnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectroboticslearnerComponent]
    });
    fixture = TestBed.createComponent(ProjectroboticslearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
