import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminpanel2Component } from './adminpanel2.component';

describe('Adminpanel2Component', () => {
  let component: Adminpanel2Component;
  let fixture: ComponentFixture<Adminpanel2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Adminpanel2Component]
    });
    fixture = TestBed.createComponent(Adminpanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
