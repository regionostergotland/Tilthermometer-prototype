import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticHeaderNavBarComponent } from './static-header-navbar.component';

describe('HeaderNavBarComponent', () => {
  let component: StaticHeaderNavBarComponent;
  let fixture: ComponentFixture<StaticHeaderNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticHeaderNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticHeaderNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
