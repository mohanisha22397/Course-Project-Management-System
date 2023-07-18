import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectiotlearnerComponent } from './projectiotlearner.component';

describe('ProjectiotlearnerComponent', () => {
  let component: ProjectiotlearnerComponent;
  let fixture: ComponentFixture<ProjectiotlearnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectiotlearnerComponent]
    });
    fixture = TestBed.createComponent(ProjectiotlearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
