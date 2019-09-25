import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountLayoutComponent } from './my-account-layout.component';

describe('MyAccountLayoutComponent', () => {
  let component: MyAccountLayoutComponent;
  let fixture: ComponentFixture<MyAccountLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
