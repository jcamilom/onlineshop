import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesLayoutComponent } from './components/messages-layout/messages-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
