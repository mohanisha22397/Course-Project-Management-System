import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectelectronicslearnerComponent } from './projectelectronicslearner.component';

describe('ProjectelectronicslearnerComponent', () => {
  let component: ProjectelectronicslearnerComponent;
  let fixture: ComponentFixture<ProjectelectronicslearnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectelectronicslearnerComponent]
    });
    fixture = TestBed.createComponent(ProjectelectronicslearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
