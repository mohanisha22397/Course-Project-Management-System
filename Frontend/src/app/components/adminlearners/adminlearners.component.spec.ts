import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlearnersComponent } from './adminlearners.component';

describe('AdminlearnersComponent', () => {
  let component: AdminlearnersComponent;
  let fixture: ComponentFixture<AdminlearnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminlearnersComponent]
    });
    fixture = TestBed.createComponent(AdminlearnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
