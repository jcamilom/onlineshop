import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountLayoutComponent } from './components/my-account-layout/my-account-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
