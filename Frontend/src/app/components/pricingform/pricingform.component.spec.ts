import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingformComponent } from './pricingform.component';

describe('PricingformComponent', () => {
  let component: PricingformComponent;
  let fixture: ComponentFixture<PricingformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingformComponent]
    });
    fixture = TestBed.createComponent(PricingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
