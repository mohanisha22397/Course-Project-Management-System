import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EementorComponent } from './eementor.component';

describe('EementorComponent', () => {
  let component: EementorComponent;
  let fixture: ComponentFixture<EementorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EementorComponent]
    });
    fixture = TestBed.createComponent(EementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
