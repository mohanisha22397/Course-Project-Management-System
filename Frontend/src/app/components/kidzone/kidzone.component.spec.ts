import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidzoneComponent } from './kidzone.component';

describe('KidzoneComponent', () => {
  let component: KidzoneComponent;
  let fixture: ComponentFixture<KidzoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidzoneComponent]
    });
    fixture = TestBed.createComponent(KidzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
