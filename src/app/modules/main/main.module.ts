import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainWraperComponent } from './components/main-wraper/main-wraper.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainWraperComponent, NavTabsComponent, SideBarComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
