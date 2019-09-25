import { Component, OnInit } from '@angular/core';
import { faHome, faStar, faEnvelope, faCog,  faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {
  public readonly faHome = faHome;
  public readonly faStar = faStar;
  public readonly faEnvelope = faEnvelope;
  public readonly faCog = faCog;
  public readonly faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

}
