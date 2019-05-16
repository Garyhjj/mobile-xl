import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIiComponent } from './test-ii.component';

describe('TestIiComponent', () => {
  let component: TestIiComponent;
  let fixture: ComponentFixture<TestIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIiComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
