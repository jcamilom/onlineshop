import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistLayoutComponent } from './components/wishlist-layout/wishlist-layout.component';

const routes: Routes = [
  {
    path: '',
    component: WishlistLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
