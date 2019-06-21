import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  { path: 'login', component: LoginPage},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    CoreModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [LoginPage],
  exports: [RouterModule]
})
export class AppRoutingModule {}
