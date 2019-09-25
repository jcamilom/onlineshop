import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../types/shopping-item';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  items: Array<ShoppingItem> = [
    {
      date: new Date(),
      locationFrom: 'Houston, TX, 33619',
      locationTo: 'Houston, TX, 33619',
      amount: 230.23,
      quantity: '1',
      selected: false
    },
    {
      date: new Date(),
      locationFrom: 'Houston, TX, 33619',
      locationTo: 'Medellín, Col, 050029',
      amount: 520,
      quantity: '1',
      selected: true
    },
    {
      date: new Date(),
      locationFrom: 'Houston, TX, 33619',
      locationTo: 'Medellín, Col, 050029',
      amount: 200,
      quantity: '2',
      selected: false
    },
    {
      date: new Date(),
      locationFrom: 'Houston, TX, 33619',
      locationTo: 'Medellín, Col, 050029',
      amount: 300,
      quantity: '3',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public toggleSelectAll(event: boolean) {
    this.items.forEach((item) => item.selected = event);
  }

}
