import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIi2Component } from './test-ii2.component';

describe('TestIi2Component', () => {
  let component: TestIi2Component;
  let fixture: ComponentFixture<TestIi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIi2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
