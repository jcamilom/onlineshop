import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SettingsLayoutComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
