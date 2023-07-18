import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectelectronicsfeesComponent } from './projectelectronicsfees.component';

describe('ProjectelectronicsfeesComponent', () => {
  let component: ProjectelectronicsfeesComponent;
  let fixture: ComponentFixture<ProjectelectronicsfeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectelectronicsfeesComponent]
    });
    fixture = TestBed.createComponent(ProjectelectronicsfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
