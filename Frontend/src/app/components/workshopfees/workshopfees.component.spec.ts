import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopfeesComponent } from './workshopfees.component';

describe('WorkshopfeesComponent', () => {
  let component: WorkshopfeesComponent;
  let fixture: ComponentFixture<WorkshopfeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopfeesComponent]
    });
    fixture = TestBed.createComponent(WorkshopfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
