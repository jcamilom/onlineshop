import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistLayoutComponent } from './wishlist-layout.component';

describe('WishlistLayoutComponent', () => {
  let component: WishlistLayoutComponent;
  let fixture: ComponentFixture<WishlistLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
