import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIi3Component } from './test-ii3.component';

describe('TestIi3Component', () => {
  let component: TestIi3Component;
  let fixture: ComponentFixture<TestIi3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIi3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
