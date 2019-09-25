import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWraperComponent } from './components/main-wraper/main-wraper.component';


const routes: Routes = [
  {
    path: '',
    component: MainWraperComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'messages',
        loadChildren: '../messages/messages.module#MessagesModule'
      },
      {
        path: 'my-account',
        loadChildren: '../my-account/my-account.module#MyAccountModule'
      },
      {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsModule'
      },
      {
        path: 'wishlist',
        loadChildren: '../wishlist/wishlist.module#WishlistModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
