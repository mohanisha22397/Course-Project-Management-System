import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminlogin2Component } from './adminlogin2.component';

describe('Adminlogin2Component', () => {
  let component: Adminlogin2Component;
  let fixture: ComponentFixture<Adminlogin2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Adminlogin2Component]
    });
    fixture = TestBed.createComponent(Adminlogin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
