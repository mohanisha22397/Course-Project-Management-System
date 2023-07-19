import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboiotmentorComponent } from './roboiotmentor.component';

describe('RoboiotmentorComponent', () => {
  let component: RoboiotmentorComponent;
  let fixture: ComponentFixture<RoboiotmentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoboiotmentorComponent]
    });
    fixture = TestBed.createComponent(RoboiotmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
