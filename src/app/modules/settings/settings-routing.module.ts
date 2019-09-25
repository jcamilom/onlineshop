import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
