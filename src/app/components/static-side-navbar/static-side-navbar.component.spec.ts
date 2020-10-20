import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSideNavbarComponent } from './static-side-navbar.component';

describe('StaticSideNavbarComponent', () => {
  let component: StaticSideNavbarComponent;
  let fixture: ComponentFixture<StaticSideNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticSideNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
