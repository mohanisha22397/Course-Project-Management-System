import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebandroidmentorComponent } from './webandroidmentor.component';

describe('WebandroidmentorComponent', () => {
  let component: WebandroidmentorComponent;
  let fixture: ComponentFixture<WebandroidmentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebandroidmentorComponent]
    });
    fixture = TestBed.createComponent(WebandroidmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
