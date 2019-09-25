import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWraperComponent } from './main-wraper.component';

describe('MainWraperComponent', () => {
  let component: MainWraperComponent;
  let fixture: ComponentFixture<MainWraperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWraperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
