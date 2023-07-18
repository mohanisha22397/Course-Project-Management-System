import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectelectronicsComponent } from './projectelectronics.component';

describe('ProjectelectronicsComponent', () => {
  let component: ProjectelectronicsComponent;
  let fixture: ComponentFixture<ProjectelectronicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectelectronicsComponent]
    });
    fixture = TestBed.createComponent(ProjectelectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
