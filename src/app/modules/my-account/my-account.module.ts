import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountLayoutComponent } from './components/my-account-layout/my-account-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MyAccountLayoutComponent],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    SharedModule
  ]
})
export class MyAccountModule { }
