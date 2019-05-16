import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ii2',
  templateUrl: 'test-ii2.component.html',
  styleUrls: ['test-ii2.component.scss'],
})
export class TestIi2Component implements OnInit {

  constructor(private router: Router){}
  gotoc() {
    console.log(5555);
    this.router.navigateByUrl('tabs/tab1/test');
  }

  ngOnInit() {}

}
