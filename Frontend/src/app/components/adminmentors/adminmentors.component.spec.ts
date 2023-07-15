import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmentorsComponent } from './adminmentors.component';

describe('AdminmentorsComponent', () => {
  let component: AdminmentorsComponent;
  let fixture: ComponentFixture<AdminmentorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminmentorsComponent]
    });
    fixture = TestBed.createComponent(AdminmentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
