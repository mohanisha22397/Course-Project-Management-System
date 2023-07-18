import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectiotfeesComponent } from './projectiotfees.component';

describe('ProjectiotfeesComponent', () => {
  let component: ProjectiotfeesComponent;
  let fixture: ComponentFixture<ProjectiotfeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectiotfeesComponent]
    });
    fixture = TestBed.createComponent(ProjectiotfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
