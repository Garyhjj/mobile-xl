import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ii',
  templateUrl: 'test-ii.component.html',
  styleUrls: ['test-ii.component.scss'],
})
export class TestIiComponent implements OnInit {

  constructor(private router: Router) { }

  gotoc() {
    console.log(5555);
    this.router.navigateByUrl('tabs/tab1/test1');
  }

  ngOnInit() {}

}
