import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidzonelearnerComponent } from './kidzonelearner.component';

describe('KidzonelearnerComponent', () => {
  let component: KidzonelearnerComponent;
  let fixture: ComponentFixture<KidzonelearnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidzonelearnerComponent]
    });
    fixture = TestBed.createComponent(KidzonelearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
