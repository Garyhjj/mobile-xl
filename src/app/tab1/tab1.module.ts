import { TestIi2Component } from './test-ii2/test-ii2.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab1Page } from './tab1.page';
import { TestIiComponent } from './test-ii/test-ii.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page, 
    children: [{ path: 'test', component: TestIiComponent },
    {path: '', component: TestIi2Component}
  ] }])
  ],
  declarations: [Tab1Page, TestIiComponent, TestIi2Component]
})
export class Tab1PageModule { }
