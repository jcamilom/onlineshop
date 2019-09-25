import { Component, OnInit } from '@angular/core';

import { faAd, faCalendar, faHeart, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public readonly faAd = faAd;
  public readonly faCalendar = faCalendar;
  public readonly faHeart = faHeart;
  public readonly faLightbulb = faLightbulb;

  public adEnabled = true;

  constructor() { }

  ngOnInit() {
  }

}
