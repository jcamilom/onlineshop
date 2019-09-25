import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistLayoutComponent } from './components/wishlist-layout/wishlist-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WishlistLayoutComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    SharedModule
  ]
})
export class WishlistModule { }
