import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlmentorComponent } from './mlmentor.component';

describe('MlmentorComponent', () => {
  let component: MlmentorComponent;
  let fixture: ComponentFixture<MlmentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MlmentorComponent]
    });
    fixture = TestBed.createComponent(MlmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
