import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectiotComponent } from './projectiot.component';

describe('ProjectiotComponent', () => {
  let component: ProjectiotComponent;
  let fixture: ComponentFixture<ProjectiotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectiotComponent]
    });
    fixture = TestBed.createComponent(ProjectiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
