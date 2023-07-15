import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminkidzoneComponent } from './adminkidzone.component';

describe('AdminkidzoneComponent', () => {
  let component: AdminkidzoneComponent;
  let fixture: ComponentFixture<AdminkidzoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminkidzoneComponent]
    });
    fixture = TestBed.createComponent(AdminkidzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
