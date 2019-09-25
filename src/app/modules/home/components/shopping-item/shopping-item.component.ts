import { Component, OnInit, Input } from '@angular/core';
import { ShoppingItem } from '../../types/shopping-item';
import { faLocationArrow, faChevronDown, faTruckMoving, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  public readonly faLocationArrow = faLocationArrow;
  public readonly faChevronDown = faChevronDown;
  public readonly faTruckMoving = faTruckMoving;
  public readonly faEllipsisV = faEllipsisV;

  @Input() item: ShoppingItem;
  constructor() { }

  ngOnInit() {
  }

}
