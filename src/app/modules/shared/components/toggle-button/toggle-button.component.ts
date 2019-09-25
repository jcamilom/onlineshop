import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {

  @Input() checked: boolean;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onClick() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
