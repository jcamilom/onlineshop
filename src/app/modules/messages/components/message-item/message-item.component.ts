import { Component, OnInit, Input } from '@angular/core';
import { MessageItem } from '../../types/message-item';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input() message: MessageItem;

  constructor() { }

  ngOnInit() {
  }

}
