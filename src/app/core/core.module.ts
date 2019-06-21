import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { throwIfAlreadyLoaded } from './module-import-guard';

const INJECTIONS = [

];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [IonicModule],
  declarations: [],
  providers: [
    ...INJECTIONS,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
