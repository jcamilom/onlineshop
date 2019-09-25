import { Component, OnInit } from '@angular/core';
import { MessageItem } from '../../types/message-item';

@Component({
  selector: 'app-messages-layout',
  templateUrl: './messages-layout.component.html',
  styleUrls: ['./messages-layout.component.scss']
})
export class MessagesLayoutComponent implements OnInit {

  public messages: Array<MessageItem> = [
    {
      date: new Date(),
      from: 'Carlos',
      subject: 'Lost item',
      message: 'Hi Camilo, I\'m sorry to inform you that your order couldn\'t reach the destination. We will be returning the money in the next days. Sorry for the inconvenience.',
      selected: false
    },
    {
      date: new Date(),
      from: 'Charles',
      subject: 'Your order',
      message: 'Your order with ID: 12345 has been dispatched. Thanks for buying with us.',
      selected: true
    },
    {
      date: new Date(),
      from: 'Sabina',
      subject: 'Wanna buy more?',
      message: 'Hi Camilo. I wonder if you are still interest in our products. We are on sale, maybe you could get a good deal.',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public toggleSelectAll(event: boolean) {
    this.messages.forEach((message) => message.selected = event);
  }

}
