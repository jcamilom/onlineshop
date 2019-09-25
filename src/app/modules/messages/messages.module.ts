import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesLayoutComponent } from './components/messages-layout/messages-layout.component';
import { SharedModule } from '../shared/shared.module';
import { MessageItemComponent } from './components/message-item/message-item.component';

@NgModule({
  declarations: [MessagesLayoutComponent, MessageItemComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule
  ]
})
export class MessagesModule { }
