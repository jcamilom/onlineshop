import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-field',
  templateUrl: './check-field.component.html',
  styleUrls: ['./check-field.component.scss']
})
export class CheckFieldComponent {

  @Input() checked: boolean;
  @Input() id: string;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onClick() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
