import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ii',
  templateUrl: 'test-ii.component.html',
  styleUrls: ['test-ii.component.scss'],
})
export class TestIiComponent implements OnInit {

  constructor(private router: Router) { }

  gotoc() {
    this.router.navigateByUrl('tabs/tab1/test1');
  }

  ngOnInit() {
  }
}
