import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshoplearnerComponent } from './workshoplearner.component';

describe('WorkshoplearnerComponent', () => {
  let component: WorkshoplearnerComponent;
  let fixture: ComponentFixture<WorkshoplearnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshoplearnerComponent]
    });
    fixture = TestBed.createComponent(WorkshoplearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
