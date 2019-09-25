import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { HomeRoutingModule } from './home.module-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeLayoutComponent, ShoppingItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
